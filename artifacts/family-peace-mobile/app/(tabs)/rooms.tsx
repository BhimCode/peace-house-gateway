import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const DOMAIN = process.env.EXPO_PUBLIC_DOMAIN ?? "";
const IMG = (name: string) =>
  DOMAIN ? `https://${DOMAIN}/images/${name}` : null;

interface Amenity {
  icon: string;
  label: string;
}

interface Room {
  id: string;
  number: string;
  type: string;
  name: string;
  price: string;
  description: string;
  image: string | null;
  amenities: Amenity[];
}

const ROOMS: Room[] = [
  {
    id: "standard",
    number: "01",
    type: "Standard",
    name: "Standard Room",
    price: "NPR 800 / night",
    description:
      "Cozy and spotless room perfect for solo travelers or couples. Comfortable bed, hot shower, plenty of natural light, and free WiFi to keep you connected.",
    image: IMG("room-twin.png"),
    amenities: [
      { icon: "bed-outline", label: "Twin / Double bed" },
      { icon: "wifi-outline", label: "Fast WiFi" },
      { icon: "water-outline", label: "Hot Shower" },
      { icon: "bag-outline", label: "Luggage Storage" },
      { icon: "cafe-outline", label: "Breakfast included" },
      { icon: "sunny-outline", label: "Natural light" },
    ],
  },
  {
    id: "deluxe",
    number: "02",
    type: "Deluxe",
    name: "Deluxe Room",
    price: "NPR 1,500 / night",
    description:
      "Spacious deluxe room with views over Thamel rooftops, en-suite bathroom, and premium bedding. Ideal for couples wanting a little extra comfort.",
    image: IMG("exterior.png"),
    amenities: [
      { icon: "bed-outline", label: "Queen bed" },
      { icon: "wifi-outline", label: "Fast WiFi" },
      { icon: "water-outline", label: "En-suite" },
      { icon: "aperture-outline", label: "Rooftop view" },
      { icon: "cafe-outline", label: "Breakfast included" },
      { icon: "star-outline", label: "Premium bedding" },
    ],
  },
  {
    id: "family",
    number: "03",
    type: "Family",
    name: "Family Room",
    price: "NPR 2,200 / night",
    description:
      "Our largest, most colorful room — perfect for families or small groups of friends. Comfortably fits up to four guests, with extra beds available on request.",
    image: IMG("room-family.png"),
    amenities: [
      { icon: "bed-outline", label: "3–4 beds" },
      { icon: "wifi-outline", label: "Fast WiFi" },
      { icon: "water-outline", label: "Hot Shower" },
      { icon: "people-outline", label: "Family friendly" },
      { icon: "cafe-outline", label: "Breakfast included" },
      { icon: "expand-outline", label: "Extra space" },
    ],
  },
];

function RoomCard({ room }: { room: Room }) {
  const colors = useColors();
  const router = useRouter();

  return (
    <View
      testID={`room-card-${room.id}`}
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
    >
      {room.image && (
        <View style={styles.cardImageWrap}>
          <Image
            source={{ uri: room.image }}
            style={styles.cardImage}
            contentFit="cover"
            transition={400}
          />
          <View style={[styles.priceBadge, { backgroundColor: colors.primary }]}>
            <Text style={styles.priceText}>{room.price}</Text>
          </View>
        </View>
      )}

      <View style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <Text style={[styles.roomType, { color: colors.primary }]}>
            {room.number} — {room.type}
          </Text>
        </View>
        <Text style={[styles.roomName, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
          {room.name}
        </Text>
        <Text style={[styles.roomDesc, { color: colors.mutedForeground }]}>{room.description}</Text>

        <View style={[styles.amenitiesGrid, { borderTopColor: colors.border, borderBottomColor: colors.border }]}>
          {room.amenities.map((a) => (
            <View key={a.label} style={styles.amenityItem}>
              <Ionicons name={a.icon as any} size={16} color={colors.primary} />
              <Text style={[styles.amenityText, { color: colors.foreground }]}>{a.label}</Text>
            </View>
          ))}
        </View>

        <Pressable
          testID={`book-${room.id}-btn`}
          style={({ pressed }) => [
            styles.bookBtn,
            {
              borderColor: colors.primary,
              opacity: pressed ? 0.8 : 1,
            },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push("/(tabs)/contact");
          }}
        >
          <Text style={[styles.bookBtnText, { color: colors.primary }]}>Book this room</Text>
          <Ionicons name="arrow-forward" size={15} color={colors.primary} />
        </Pressable>
      </View>
    </View>
  );
}

export default function RoomsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom + 16;

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[styles.container, { paddingBottom: bottomPad }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.pageHeader, Platform.OS === "web" && { paddingTop: 67 }]}>
        <Text style={[styles.eyebrow, { color: colors.primary }]}>Our Rooms</Text>
        <Text style={[styles.pageTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
          Comfortable stays for{" "}
          <Text style={{ color: colors.primary, fontStyle: "italic" }}>every traveler</Text>
        </Text>
      </View>

      {ROOMS.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 24,
  },
  pageHeader: {
    paddingBottom: 4,
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
  },
  card: {
    borderWidth: 1,
    overflow: "hidden",
  },
  cardImageWrap: {
    height: 220,
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  priceBadge: {
    position: "absolute",
    top: 16,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  priceText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
  cardBody: {
    padding: 20,
  },
  cardHeader: {
    marginBottom: 6,
  },
  roomType: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  roomName: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 10,
    fontStyle: "italic",
  },
  roomDesc: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
  },
  amenitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 18,
  },
  amenityItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    width: "45%",
  },
  amenityText: {
    fontSize: 13,
    flexShrink: 1,
  },
  bookBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 1.5,
  },
  bookBtnText: {
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
