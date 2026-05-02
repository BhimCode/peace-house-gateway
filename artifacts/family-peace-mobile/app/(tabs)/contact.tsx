import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Alert,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const DOMAIN = process.env.EXPO_PUBLIC_DOMAIN ?? "";
const IMG = (name: string) =>
  DOMAIN ? `https://${DOMAIN}/images/${name}` : null;

interface InfoRow {
  icon: string;
  label: string;
  value: string;
  onPress?: () => void;
}

const HOURS = [
  { label: "Reception", value: "24 / 7" },
  { label: "Check-in", value: "From 12:00" },
  { label: "Check-out", value: "Until 11:00" },
  { label: "Breakfast", value: "7:00 – 10:00" },
];

export default function ContactScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom + 16;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const INFO_ROWS: InfoRow[] = [
    {
      icon: "location-outline",
      label: "Address",
      value: "Thamel, Kathmandu 44600, Nepal",
    },
    {
      icon: "call-outline",
      label: "Phone",
      value: "+977 1-4981138",
      onPress: () => Linking.openURL("tel:+97714981138"),
    },
    {
      icon: "mail-outline",
      label: "Email",
      value: "familypeacehouse@gmail.com",
      onPress: () => Linking.openURL("mailto:familypeacehouse@gmail.com"),
    },
  ];

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !arrival.trim() || !departure.trim()) {
      Alert.alert("Missing info", "Please fill in your name, email, and dates.");
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      Alert.alert(
        "Booking Request Sent!",
        "Thank you! Bimal and the team will confirm your stay within 24 hours."
      );
      setName("");
      setEmail("");
      setArrival("");
      setDeparture("");
      setGuests("2");
      setMessage("");
    }, 1000);
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[styles.container, { paddingBottom: bottomPad }]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[styles.pageHeader, Platform.OS === "web" && { paddingTop: 67 }]}>
        <Text style={[styles.eyebrow, { color: colors.primary }]}>Contact & Book</Text>
        <Text style={[styles.pageTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
          Reserve your{" "}
          <Text style={{ color: colors.primary, fontStyle: "italic" }}>stay</Text>
        </Text>
      </View>

      {IMG("exterior.png") && (
        <View style={[styles.heroImg, { borderRadius: colors.radius }]}>
          <Image
            source={{ uri: IMG("exterior.png")! }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroTextWrap}>
            <Text style={[styles.heroText, { fontFamily: "DancingScript_700Bold" }]}>
              Family Peace House
            </Text>
            <Text style={styles.heroSub}>Thamel, Kathmandu</Text>
          </View>
        </View>
      )}

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
        <Text style={[styles.cardTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
          Contact Info
        </Text>
        {INFO_ROWS.map((row) => (
          <Pressable
            testID={`contact-row-${row.icon}`}
            key={row.label}
            style={({ pressed }) => [
              styles.infoRow,
              { borderBottomColor: colors.border, opacity: pressed && row.onPress ? 0.7 : 1 },
            ]}
            onPress={row.onPress}
            disabled={!row.onPress}
          >
            <View style={[styles.infoIconWrap, { backgroundColor: colors.warm }]}>
              <Ionicons name={row.icon as any} size={18} color={colors.primary} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={[styles.infoLabel, { color: colors.mutedForeground }]}>{row.label}</Text>
              <Text style={[styles.infoValue, { color: colors.foreground }]}>{row.value}</Text>
            </View>
            {row.onPress && (
              <Ionicons name="chevron-forward" size={16} color={colors.mutedForeground} />
            )}
          </Pressable>
        ))}
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
        <Text style={[styles.cardTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
          Hours
        </Text>
        {HOURS.map((h, i) => (
          <View
            key={h.label}
            style={[
              styles.hourRow,
              { borderBottomColor: colors.border },
              i === HOURS.length - 1 && { borderBottomWidth: 0 },
            ]}
          >
            <Text style={[styles.hourLabel, { color: colors.mutedForeground }]}>{h.label}</Text>
            <Text style={[styles.hourValue, { color: colors.foreground }]}>{h.value}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderRadius: colors.radius }]}>
        <Text style={[styles.cardTitle, { color: colors.dark, fontFamily: "CormorantGaramond_600SemiBold" }]}>
          Booking Inquiry
        </Text>
        <Text style={[styles.formSubtitle, { color: colors.mutedForeground }]}>
          Send us a message and we'll confirm your stay within 24 hours.
        </Text>

        <View style={styles.formFields}>
          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Full Name</Text>
            <TextInput
              testID="booking-name-input"
              style={[styles.input, { borderColor: colors.border, color: colors.foreground, backgroundColor: colors.background }]}
              placeholder="Your name"
              placeholderTextColor={colors.mutedForeground}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Email</Text>
            <TextInput
              testID="booking-email-input"
              style={[styles.input, { borderColor: colors.border, color: colors.foreground, backgroundColor: colors.background }]}
              placeholder="you@example.com"
              placeholderTextColor={colors.mutedForeground}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.fieldGroup, { flex: 1 }]}>
              <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Arrival</Text>
              <TextInput
                testID="booking-arrival-input"
                style={[styles.input, { borderColor: colors.border, color: colors.foreground, backgroundColor: colors.background }]}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={colors.mutedForeground}
                value={arrival}
                onChangeText={setArrival}
              />
            </View>
            <View style={[styles.fieldGroup, { flex: 1 }]}>
              <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Departure</Text>
              <TextInput
                testID="booking-departure-input"
                style={[styles.input, { borderColor: colors.border, color: colors.foreground, backgroundColor: colors.background }]}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={colors.mutedForeground}
                value={departure}
                onChangeText={setDeparture}
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Guests</Text>
            <TextInput
              testID="booking-guests-input"
              style={[styles.input, { borderColor: colors.border, color: colors.foreground, backgroundColor: colors.background }]}
              placeholder="Number of guests"
              placeholderTextColor={colors.mutedForeground}
              value={guests}
              onChangeText={setGuests}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Message (optional)</Text>
            <TextInput
              testID="booking-message-input"
              style={[styles.input, styles.textarea, { borderColor: colors.border, color: colors.foreground, backgroundColor: colors.background }]}
              placeholder="Any special requests or questions?"
              placeholderTextColor={colors.mutedForeground}
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <Pressable
            testID="submit-booking-btn"
            style={({ pressed }) => [
              styles.submitBtn,
              { backgroundColor: submitting ? colors.mutedForeground : colors.primary, opacity: pressed ? 0.85 : 1 },
            ]}
            onPress={handleSubmit}
            disabled={submitting}
          >
            <Text style={styles.submitBtnText}>
              {submitting ? "Sending..." : "Send Booking Request"}
            </Text>
            {!submitting && <Ionicons name="send-outline" size={16} color="#fff" />}
          </Pressable>
        </View>
      </View>

      <View style={[styles.signatureWrap, { backgroundColor: colors.warm, borderRadius: colors.radius }]}>
        <Text style={[styles.signatureText, { color: colors.foreground }]}>
          © 2025 Family Peace House Pvt. Ltd.{"\n"}Crafted with ♥ in Thamel, Kathmandu
        </Text>
        <Text style={[styles.signatureName, { color: colors.primary, fontFamily: "DancingScript_700Bold" }]}>
          — Bimal & family
        </Text>
      </View>
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
  },
  heroImg: {
    height: 180,
    overflow: "hidden",
    position: "relative",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(31,26,22,0.5)",
  },
  heroTextWrap: {
    padding: 22,
    flex: 1,
    justifyContent: "flex-end",
  },
  heroText: {
    color: "#fff",
    fontSize: 28,
  },
  heroSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    letterSpacing: 1,
    marginTop: 4,
  },
  card: {
    borderWidth: 1,
    overflow: "hidden",
    padding: 20,
    gap: 0,
  },
  cardTitle: {
    fontSize: 22,
    fontStyle: "italic",
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    gap: 14,
  },
  infoIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoTextWrap: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  hourRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 11,
    borderBottomWidth: 1,
  },
  hourLabel: {
    fontSize: 14,
  },
  hourValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  formSubtitle: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },
  formFields: {
    gap: 16,
  },
  fieldGroup: {
    gap: 6,
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  textarea: {
    height: 100,
    paddingTop: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 4,
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  signatureWrap: {
    padding: 22,
    alignItems: "center",
    gap: 8,
  },
  signatureText: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
  },
  signatureName: {
    fontSize: 24,
  },
});
