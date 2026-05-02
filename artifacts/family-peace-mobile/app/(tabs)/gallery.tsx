import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import { useColors } from "@/hooks/useColors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const DOMAIN = process.env.EXPO_PUBLIC_DOMAIN ?? "";
const IMG = (name: string) =>
  DOMAIN ? `https://${DOMAIN}/images/${name}` : null;

interface GalleryItem {
  id: string;
  image: string | null;
  title: string;
  subtitle: string;
  tall?: boolean;
}

const GALLERY: GalleryItem[] = [
  {
    id: "1",
    image: IMG("courtyard-flags.png"),
    title: "Prayer-Flag Courtyard",
    subtitle: "Outdoor",
    tall: true,
  },
  {
    id: "2",
    image: IMG("courtyard-breakfast.png"),
    title: "Family Breakfast",
    subtitle: "Mornings",
  },
  {
    id: "3",
    image: IMG("exterior.png"),
    title: "Our Guesthouse",
    subtitle: "Arrival",
  },
  {
    id: "4",
    image: IMG("room-twin.png"),
    title: "Standard Room",
    subtitle: "Rooms",
  },
  {
    id: "5",
    image: IMG("room-family.png"),
    title: "Family Room",
    subtitle: "Rooms",
  },
];

const TILE_SIZE = (SCREEN_WIDTH - 52) / 2;

function GalleryTile({ item, onPress }: { item: GalleryItem; onPress: () => void }) {
  const colors = useColors();
  const height = item.tall ? TILE_SIZE * 2 + 12 : TILE_SIZE;

  return (
    <Pressable
      testID={`gallery-tile-${item.id}`}
      style={({ pressed }) => [
        styles.tile,
        {
          width: TILE_SIZE,
          height,
          borderRadius: colors.radius,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
    >
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          transition={400}
        />
      ) : (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.warm }]} />
      )}
      <View style={[styles.tileOverlay, { borderRadius: colors.radius }]} />
      <View style={styles.tileLabel}>
        <Text style={[styles.tileSub]}>{item.subtitle}</Text>
        <Text style={[styles.tileTitle, { fontFamily: "CormorantGaramond_600SemiBold" }]}>
          {item.title}
        </Text>
      </View>
    </Pressable>
  );
}

export default function GalleryScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom + 16;

  const left = GALLERY.filter((_, i) => i % 2 === 0);
  const right = GALLERY.filter((_, i) => i % 2 === 1);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={[styles.container, { paddingBottom: bottomPad }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.pageHeader, Platform.OS === "web" && { paddingTop: 67 }]}>
          <Text style={[styles.eyebrow, { color: colors.primary }]}>Our Spaces</Text>
          <Text style={[styles.pageTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
            A glimpse of{" "}
            <Text style={{ color: colors.primary, fontStyle: "italic" }}>home</Text>
          </Text>
          <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
            From the prayer-flag courtyard to the rooftop garden, every corner is made for slowing down.
          </Text>
        </View>

        <View style={styles.masonryRow}>
          <View style={styles.column}>
            {left.map((item) => (
              <GalleryTile key={item.id} item={item} onPress={() => setSelected(item)} />
            ))}
          </View>
          <View style={styles.column}>
            {right.map((item) => (
              <GalleryTile key={item.id} item={item} onPress={() => setSelected(item)} />
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={!!selected}
        transparent
        animationType="fade"
        onRequestClose={() => setSelected(null)}
      >
        <Pressable style={styles.modalBg} onPress={() => setSelected(null)}>
          <View style={[styles.modalContent, { borderRadius: colors.radius * 2 }]}>
            {selected?.image && (
              <Image
                source={{ uri: selected.image }}
                style={styles.modalImage}
                contentFit="cover"
              />
            )}
            <View style={styles.modalFooter}>
              <View>
                <Text style={[styles.modalSub]}>{selected?.subtitle}</Text>
                <Text style={[styles.modalTitle, { fontFamily: "CormorantGaramond_600SemiBold", color: "#fff" }]}>
                  {selected?.title}
                </Text>
              </View>
              <Pressable
                testID="gallery-close-btn"
                style={[styles.closeBtn, { backgroundColor: colors.primary }]}
                onPress={() => setSelected(null)}
              >
                <Ionicons name="close" size={20} color="#fff" />
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  pageHeader: {
    marginBottom: 4,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 38,
    marginBottom: 10,
  },
  pageSubtitle: {
    fontSize: 14,
    lineHeight: 22,
  },
  masonryRow: {
    flexDirection: "row",
    gap: 12,
  },
  column: {
    flex: 1,
    gap: 12,
  },
  tile: {
    overflow: "hidden",
  },
  tileOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.28)",
  },
  tileLabel: {
    position: "absolute",
    bottom: 12,
    left: 14,
    right: 14,
  },
  tileSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 10,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  tileTitle: {
    color: "#fff",
    fontSize: 17,
    fontStyle: "italic",
  },
  modalBg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    overflow: "hidden",
    maxHeight: 520,
  },
  modalImage: {
    width: "100%",
    height: 400,
  },
  modalFooter: {
    backgroundColor: "rgba(31,26,22,0.96)",
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalSub: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 10,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  modalTitle: {
    fontSize: 22,
    fontStyle: "italic",
  },
  closeBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
});
