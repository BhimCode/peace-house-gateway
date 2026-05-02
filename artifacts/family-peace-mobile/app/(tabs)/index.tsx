import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const DOMAIN = process.env.EXPO_PUBLIC_DOMAIN ?? "";
const IMG = (name: string) =>
  DOMAIN ? `https://${DOMAIN}/images/${name}` : null;

const STATS = [
  { num: "15+", label: "Years of\nwarmth" },
  { num: "2,400", label: "Happy\nguests" },
  { num: "48", label: "Countries\nvisited" },
  { num: "4.9★", label: "Average\nrating" },
];

function StatCard({ num, label }: { num: string; label: string }) {
  const colors = useColors();
  return (
    <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={[styles.statNum, { color: colors.primary, fontFamily: "CormorantGaramond_600SemiBold" }]}>{num}</Text>
      <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{label}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const heroScale = scrollY.interpolate({
    inputRange: [-100, 0],
    outputRange: [1.1, 1],
    extrapolate: "clamp",
  });

  const topInset = Platform.OS === "web" ? 67 : insets.top;

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <Animated.View
        style={[
          styles.floatingHeader,
          {
            paddingTop: topInset,
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
            opacity: headerOpacity,
          },
        ]}
      >
        <Text style={[styles.floatingLogo, { color: colors.primary, fontFamily: "DancingScript_700Bold" }]}>
          Family Peace House
        </Text>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={16}
      >
        <View style={styles.heroContainer}>
          <Animated.View style={[styles.heroBg, { transform: [{ scale: heroScale }] }]}>
            {IMG("courtyard-flags.png") ? (
              <Image
                source={{ uri: IMG("courtyard-flags.png")! }}
                style={StyleSheet.absoluteFill}
                contentFit="cover"
                transition={400}
              />
            ) : (
              <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.dark }]} />
            )}
            <View style={styles.heroOverlay} />
          </Animated.View>

          <View style={[styles.heroContent, { paddingTop: topInset + 24 }]}>
            <Text style={[styles.heroEyebrow, { color: colors.accentLight, fontFamily: "DancingScript_700Bold" }]}>
              Namaste & Welcome
            </Text>
            <Text style={[styles.heroTitle, { fontFamily: "CormorantGaramond_600SemiBold" }]}>
              A peaceful home{"\n"}in the heart of Thamel
            </Text>
            <Text style={styles.heroSubtitle}>
              Family-run guesthouse in Kathmandu — warm Nepali hospitality, courtyard breakfasts & rooftop sunsets.
            </Text>

            <View style={styles.heroActions}>
              <Pressable
                testID="book-now-btn"
                style={({ pressed }) => [
                  styles.btnPrimary,
                  { backgroundColor: colors.primary, opacity: pressed ? 0.85 : 1 },
                ]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  router.push("/(tabs)/contact");
                }}
              >
                <Text style={[styles.btnPrimaryText, { color: colors.primaryForeground }]}>Book your stay</Text>
                <Ionicons name="arrow-forward" size={16} color={colors.primaryForeground} />
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.btnGhost, { borderColor: "rgba(255,255,255,0.6)", opacity: pressed ? 0.8 : 1 }]}
                onPress={() => router.push("/(tabs)/rooms")}
              >
                <Text style={styles.btnGhostText}>Explore rooms</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: colors.background }]}>
          <Text style={[styles.eyebrow, { color: colors.primary }]}>Welcome to Family Peace House</Text>
          <Text style={[styles.sectionTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
            A guesthouse where{"\n"}guests become{" "}
            <Text style={{ color: colors.primary, fontStyle: "italic" }}>family.</Text>
          </Text>
          <Text style={[styles.bodyText, { color: colors.mutedForeground }]}>
            Tucked away on a quiet pedestrian lane in the heart of Thamel, Family Peace House is a peaceful retreat from the city's buzz. Personally managed by owner Bimal and his team, we welcome travelers from around the world with warm Nepali hospitality, freshly cooked breakfasts under prayer flags, and everything you need to fall in love with Kathmandu.
          </Text>
          <Text style={[styles.signature, { color: colors.primary, fontFamily: "DancingScript_700Bold" }]}>
            — Bimal & family
          </Text>
        </View>

        <View style={[styles.statsRow, { backgroundColor: colors.warm }]}>
          {STATS.map((s) => (
            <StatCard key={s.num} num={s.num} label={s.label} />
          ))}
        </View>

        <View style={[styles.section, { backgroundColor: colors.background }]}>
          <Text style={[styles.eyebrow, { color: colors.primary }]}>Our Space</Text>
          <Text style={[styles.sectionTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
            A glimpse of <Text style={{ color: colors.primary, fontStyle: "italic" }}>home</Text>
          </Text>

          {IMG("courtyard-breakfast.png") && (
            <View style={[styles.featureCard, { borderRadius: colors.radius }]}>
              <Image
                source={{ uri: IMG("courtyard-breakfast.png")! }}
                style={[styles.featureImage, { borderRadius: colors.radius }]}
                contentFit="cover"
                transition={400}
              />
              <View style={[styles.featureOverlay, { borderRadius: colors.radius }]}>
                <Text style={[styles.featureLabel, { fontFamily: "CormorantGaramond_600SemiBold" }]}>Family Breakfast</Text>
                <Text style={styles.featureSub}>Mornings</Text>
              </View>
            </View>
          )}
        </View>

        <View style={[styles.ctaBanner, { backgroundColor: colors.primary }]}>
          <Text style={[styles.ctaTitle, { fontFamily: "CormorantGaramond_600SemiBold" }]}>
            Ready to feel{" "}
            <Text style={{ fontStyle: "italic" }}>at home</Text>
            {" "}in Kathmandu?
          </Text>
          <Text style={styles.ctaSubtitle}>
            We'll have a hot cup of milk tea waiting.
          </Text>
          <Pressable
            testID="cta-book-btn"
            style={({ pressed }) => [styles.ctaBtn, { borderColor: "#fff", opacity: pressed ? 0.85 : 1 }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              router.push("/(tabs)/contact");
            }}
          >
            <Text style={styles.ctaBtnText}>Book your stay</Text>
            <Ionicons name="arrow-forward" size={14} color="#fff" />
          </Pressable>
        </View>

        <View style={{ height: Platform.OS === "web" ? 34 : insets.bottom + 20 }} />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  floatingHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingHorizontal: 24,
    paddingBottom: 14,
    borderBottomWidth: 1,
  },
  floatingLogo: {
    fontSize: 26,
  },
  heroContainer: {
    height: 520,
    overflow: "hidden",
  },
  heroBg: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  heroContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
    justifyContent: "flex-end",
  },
  heroEyebrow: {
    fontSize: 22,
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 42,
    color: "#fff",
    lineHeight: 50,
    marginBottom: 14,
  },
  heroSubtitle: {
    fontSize: 15,
    color: "rgba(255,255,255,0.88)",
    lineHeight: 22,
    marginBottom: 28,
    maxWidth: 300,
  },
  heroActions: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  btnPrimary: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 30,
    gap: 8,
  },
  btnPrimaryText: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  btnGhost: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 30,
    borderWidth: 1.5,
  },
  btnGhostText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 0.5,
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 40,
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 16,
  },
  signature: {
    fontSize: 28,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 12,
    justifyContent: "space-between",
  },
  statCard: {
    width: (SCREEN_WIDTH - 56) / 2,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  statNum: {
    fontSize: 34,
    fontWeight: "600",
    lineHeight: 40,
  },
  statLabel: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginTop: 6,
    textAlign: "center",
    lineHeight: 16,
  },
  featureCard: {
    height: 220,
    marginTop: 8,
    overflow: "hidden",
  },
  featureImage: {
    width: "100%",
    height: "100%",
  },
  featureOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 18,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  featureLabel: {
    fontSize: 22,
    color: "#fff",
    fontStyle: "italic",
  },
  featureSub: {
    fontSize: 11,
    color: "rgba(255,255,255,0.75)",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginTop: 4,
  },
  ctaBanner: {
    marginHorizontal: 24,
    marginBottom: 0,
    borderRadius: 16,
    padding: 32,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 36,
  },
  ctaSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginBottom: 22,
  },
  ctaBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 1.5,
  },
  ctaBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});
