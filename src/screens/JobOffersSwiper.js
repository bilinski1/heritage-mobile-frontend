import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Swiper from "react-native-deck-swiper";

// Przykładowe dane ofert pracy
const generatedOffers = [
  {
    salary: "5000 PLN",
    description: "Frontend Developer - React Native",
    contact: "frontend@example.com",
  },
  {
    salary: "7000 PLN",
    description: "Backend Developer - Node.js",
    contact: "backend@example.com",
  },
  {
    salary: "6000 PLN",
    description: "Fullstack Developer - React & Node.js",
    contact: "fullstack@example.com",
  },
  {
    salary: "8000 PLN",
    description: "Mobile Developer - React Native",
    contact: "mobile@example.com",
  },
];


export const JobOffersSwiper = ({ offers, onSwipeRight, onSwipeLeft, navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        cards={generatedOffers}
        renderCard={(offer) => (
          <View style={styles.card}>
            <Text style={styles.salary}>{offer.salary}</Text>
            <Text style={styles.description}>{offer.description}</Text>
            <Text style={styles.contact}>{offer.contact}</Text>
            <View style={styles.buttons}>
              <Button title="Kontakt" onPress={() => alert("Skontaktuj się!")} />
              <Button title="Aplikuj" onPress={() => alert("Aplikacja wysłana!")} />
            </View>
          </View>
        )}
        onSwipedRight={(index) => {
          // Akcja dla swipe w prawo
          alert(`Zaakceptowano: ${generatedOffers[index].description}`);
          onSwipeRight && onSwipeRight(generatedOffers[index]); // Wywołaj funkcję callback, jeśli jest przekazana
        }}
        onSwipedLeft={(index) => {
          // Akcja dla swipe w lewo
          alert(`Odrzucono: ${generatedOffers[index].description}`);
          onSwipeLeft && onSwipeLeft(generatedOffers[index]); // Wywołaj funkcję callback, jeśli jest przekazana
        }}
        onSwiped={(index) => setCurrentIndex(index + 1)} // Zwiększamy aktualny indeks po każdym swipe
        cardIndex={currentIndex}
        stackSize={3}
        disableTopSwipe
        disableBottomSwipe
        backgroundColor={"#f0f0f0"}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  salary: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  contact: {
    fontSize: 14,
    color: "#555",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

