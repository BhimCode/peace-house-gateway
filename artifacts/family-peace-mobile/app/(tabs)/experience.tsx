import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import {
  Platform,
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

interface ExperienceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const EXPERIENCES: ExperienceCard[] = [
  {
    id: "breakfast",
    icon: "cafe-outline",
    title: "Daily Breakfast",
    description:
      "Freshly cooked Nepali & continental breakfast served in our open courtyard each morning under prayer flags.",
  },
  {
    id: "trek",
    icon: "map-outline",
    title: "Trek Planning",
    description:
      "Bimal personally helps plan day hikes, mountain flights, and longer Himalayan treks tailored to your pace.",
  },
  {
    id: "pickup",
    icon: "car-outline",
    title: "Airport Pickup",
    description:
      "Skip the haggling — let us arrange a friendly driver to collect you on arrival at Tribhuvan Airport.",
  },
  {
    id: "tours",
    icon: "compass-outline",
    title: "Local Tours",
    description:
      "Discover hidden temples, monasteries, and the best momos in Thamel with our knowledgeable local guides.",
  },
];

interface Testimonial {
  id: string;
  text: string;
  name: string;
  country: string;
  date: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    text: "Family Peace House is a peaceful and quiet place near Thamel. The owner Bimal is friendly and helpful — he organized a day hike and a mountain flight for us. Highly recommended for young travelers!",
    name: "Sarah M.",
    country: "UK",
    date: "March 2024",
    avatar: "https://picsum.photos/seed/sarah/120",
  },
  {
    id: "marco",
    text: "The guesthouse sits on a quiet pedestrian street. There are open-air shared areas where you can relax and chat with other guests. By day three I called it home.",
    name: "Marco R.",
    country: "Italy",
    date: "January 2024",
    avatar: "https://picsum.photos/seed/marco/120",
  },
  {
    id: "aisha",
    text: "Great hospitality. Made many great friends here. Budget friendly and absolutely perfect for solo travelers. A must visit in Kathmandu!",
    name: "Aisha K.",
    country: "India",
    date: "April 2024",
    avatar: "https://picsum.photos/seed/aisha/120",
  },
];

const FEATURES = [
  "Free WiFi",
  "Rooftop Garden",
  "Courtyard Breakfast",
  "Hot Showers",
  "Trekking Tours",
  "Airport Pickup",
  "Local Guides",
  "Family Hospitality",
];

export default function ExperienceScreen() {
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
        <Text style={[styles.eyebrow, { color: colors.primary }]}>The Experience</Text>
        <Text style={[styles.pageTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
          More than just a{" "}
          <Text style={{ color: colors.primary, fontStyle: "italic" }}>stay</Text>
        </Text>
        <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
          Little touches that make the difference between a hotel and a home away from home.
        </Text>
      </View>

      <View style={styles.expGrid}>
        {EXPERIENCES.map((exp) => (
          <View
            testID={`exp-card-${exp.id}`}
            key={exp.id}
            style={[styles.expCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
          >
            <View style={[styles.expIconWrap, { backgroundColor: colors.warm }]}>
              <Ionicons name={exp.icon as any} size={28} color={colors.primary} />
            </View>
            <Text style={[styles.expTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
              {exp.title}
            </Text>
            <Text style={[styles.expDesc, { color: colors.mutedForeground }]}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.featuresWrap, { backgroundColor: colors.dark }]}>
        <View style={styles.featuresRow}>
          {FEATURES.map((f) => (
            <View key={f} style={[styles.featureChip, { borderColor: "rgba(255,255,255,0.15)" }]}>
              <Text style={[styles.featureChipText, { fontFamily: "CormorantGaramond_600SemiBold" }]}>{f}</Text>
            </View>
          ))}
        </View>
      </View>

      {IMG("courtyard-breakfast.png") && (
        <View style={[styles.testimonialsHero, { borderRadius: colors.radius }]}>
          <Image
            source={{ uri: IMG("courtyard-breakfast.png")! }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
          />
          <View style={StyleSheet.absoluteFill as any}>
            <View style={[styles.testimonialsOverlay, { borderRadius: colors.radius }]} />
          </View>
          <View style={styles.testimonialsContent}>
            <Text style={[styles.eyebrow, { color: colors.accentLight }]}>Guest Stories</Text>
            <Text style={[styles.testimonialsTitle, { fontFamily: "CormorantGaramond_600SemiBold" }]}>
              What our{" "}
              <Text style={{ color: colors.accentLight, fontStyle: "italic" }}>guests say</Text>
            </Text>
          </View>
        </View>
      )}

      {TESTIMONIALS.map((t) => (
        <View
          key={t.id}
          style={[styles.testimonialCard, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}
        >
          <Text style={[styles.quoteChar, { color: colors.primary, fontFamily: "CormorantGaramond_600SemiBold" }]}>"</Text>
          <Text style={[styles.quoteText, { color: colors.foreground, fontFamily: "CormorantGaramond_600SemiBold" }]}>
            {t.text}
          </Text>
          <View style={styles.quoteAuthor}>
            <Image
              source={{ uri: t.avatar }}
              style={[styles.avatar, { borderColor: colors.primary }]}
              contentFit="cover"
            />
            <View>
              <Text style={[styles.authorName, { color: colors.primary }]}>
                {t.name} — {t.country}
              </Text>
              <Text style={[styles.authorDate, { color: colors.mutedForeground }]}>{t.date}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
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
  expGrid: {
    gap: 14,
  },
  expCard: {
    padding: 24,
    borderWidth: 1,
    gap: 10,
  },
  expIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  expTitle: {
    fontSize: 22,
    fontStyle: "italic",
  },
  expDesc: {
    fontSize: 14,
    lineHeight: 22,
  },
  featuresWrap: {
    borderRadius: 12,
    padding: 20,
  },
  featuresRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  featureChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
  },
  featureChipText: {
    color: "#fff",
    fontSize: 14,
    fontStyle: "italic",
  },
  testimonialsHero: {
    height: 180,
    overflow: "hidden",
    position: "relative",
  },
  testimonialsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(31,26,22,0.65)",
  },
  testimonialsContent: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
  testimonialsTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "600",
  },
  testimonialCard: {
    padding: 22,
    borderWidth: 1,
    gap: 12,
  },
  quoteChar: {
    fontSize: 48,
    lineHeight: 40,
    opacity: 0.7,
  },
  quoteText: {
    fontSize: 17,
    lineHeight: 27,
    fontStyle: "italic",
  },
  quoteAuthor: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 4,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
  },
  authorName: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  authorDate: {
    fontSize: 12,
    marginTop: 2,
  },
});
