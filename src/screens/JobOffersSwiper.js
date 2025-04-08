import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import Swiper from "react-native-deck-swiper";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Arrow from 'react-native-vector-icons/Ionicons';
import Pattern from "../images/pattern.svg";



// Przykładowe dane ofert pracy
const generatedOffers = [
    {
        salary: {
            min: "3000 PLN",
            max: "5000 PLN",
        },
        description: "Intern - Junior Developer",
        longDescription:
            "Jako Junior Developer będziesz uczestniczyć w tworzeniu aplikacji webowej dla naszych klientów. Oczekujemy znajomości podstaw HTML, CSS oraz JavaScript.",
        company: "TechCorp",
        location: "Warszawa, Polska",
        contact: "intern@techcorp.com",
    },
    {
        salary: {
            min: "7000 PLN",
            max: "10000 PLN",
        },
        description: "Backend Developer - Node.js",
        longDescription:
            "W tej roli odpowiadasz za projektowanie i rozwój skalowalnych API przy użyciu Node.js. Wymagamy biegłej znajomości JavaScript, doświadczenia z Express.js i bazami danych (MongoDB lub PostgreSQL).",
        company: "Innovative Solutions",
        location: "Kraków, Polska",
        contact: "backend@innovativesolutions.com",
    },
    {
        salary: {
            min: "10000 PLN",
            max: "15000 PLN",
        },
        description: "DevOps Engineer",
        longDescription:
            "Szukamy doświadczonego inżyniera DevOps, który wesprze nas w automatyzacji procesów CI/CD oraz zarządzaniu naszą infrastrukturą w chmurze AWS. Jeśli interesują Cię projekty na dużą skalę - czekamy na Twoją aplikację!",
        company: "CloudServices",
        location: "Gdańsk, Polska",
        contact: "devops@cloudservices.com",
    },
    {
        salary: {
            min: "15000 PLN",
            max: "20000 PLN",
        },
        description: "Senior Frontend Developer - React",
        longDescription:
            "Poszukujemy senior Frontend Developera z doświadczeniem w tworzeniu zaawansowanych aplikacji w React.js. Będziesz odpowiedzialny za projektowanie interfejsów użytkownika oraz integrację z backendem. Cenimy znajomość TypeScript, Redux oraz optymalizacje wydajności.",
        company: "WebStudio",
        location: "Poznań, Polska",
        contact: "frontend@webstudio.com",
    },
];



export const JobOffersSwiper = ({offers, onSwipeRight, onSwipeLeft, navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showHint, setShowHint] = useState(true); // Stan kontrolujący tooltip


  const ModernButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Icon name="home" size={30} color="#FFFFFF" />

        </TouchableOpacity>
    );
  };

  return (
        <View style={styles.container}>
            <Pattern
                width="100%"
                height="100%"
                style={styles.background} />
          {showHint && (
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>
                  Przeciągnij w prawo lub w lewo, aby przeglądać karty!
                </Text>
                <TouchableOpacity onPress={() => setShowHint(false)}>
                  <Text style={styles.gotIt}>Zrozumiałem</Text>
                </TouchableOpacity>
              </View>
          )}

          <View style={styles.leftArrow}>
            <Arrow name="arrow-back" size={40} color="#b0b0b0" />
          </View>
          <View style={styles.rightArrow}>
            <Arrow name="arrow-forward" size={40} color="#b0b0b0" />
          </View>

          <Swiper
                cards={generatedOffers}
                renderCard={(offer) => (
                    <View style={styles.card}>
                        {/* Wyśrodkowane widełki wynagrodzenia */}
                        <Text style={styles.salary}>
                            {offer.salary.min} - {offer.salary.max}
                        </Text>
                        {/* Wyświetlanie szczegółów oferty */}
                        <Text style={styles.company}>{offer.company}</Text>
                        <Text style={styles.location}>{offer.location}</Text>
                        <Text style={styles.description}>{offer.description}</Text>
                        <View>
                            <Text style={styles.longDescription}>{offer.longDescription}</Text>
                        </View>
                        <Text style={styles.contact}>{offer.contact}</Text>

                        <View style={[styles.buttons, styles.buttonsContainer]}>
                            <Button title="Kontakt" onPress={() => alert("Skontaktuj się!")}/>
                            <Button title="Aplikuj" onPress={() => alert("Aplikacja wysłana!")}/>
                            <Button title="Powrót" onPress={() => navigation.goBack()} />
                          <ModernButton
                              title="Click Me"
                              onPress={() => Alert.alert('Button Pressed')}
                          />

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
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        //backgroundColor: '#f0f0f0',

    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    card: {
      flex: 1,
      height: 300,
        borderRadius: 12,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#246EE9",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: {width: 0, height: 5},
    },
    salary: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        marginVertical: 20,

    },
    description: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: "center",
        color: "#ffffff",
        marginBottom: 1,
    },
    contact: {
        fontSize: 14,
        color: "#ffffff",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    longDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: '#ffffff',
    },
  company: {
    fontSize: 16, // Trochę większy rozmiar tekstu dla nazwy firmy
    color: '#ffffff', // Czarny lub neutralny kolor
    fontWeight: 'bold', // Pogrubienie, aby wyróżnić firmę
    marginBottom: 5, // Odstęp od lokalizacji
  },
  location: {
    fontSize: 14, // Mały, ale czytelny rozmiar tekstu
    color: '#ffffff', // Szary kolor dla lokalizacji
    fontStyle: 'italic', // Kursywa, aby wyróżnić miejsce
    marginBottom: 2, // Odstęp od kolejnych elementów
  },
  buttonsContainer: {
    position: 'absolute', // Przyciski zawsze na dole
    bottom: 20, // Odstęp od dolnej krawędzi
    left: 20,
    right: 20,
    flexDirection: 'row', // Układ poziomy
    justifyContent: 'space-between', // Odstępy między przyciskami
  },

  button: {
    backgroundColor: '#FF9900', // Profesjonalny niebieski jako kolor akcentowy
    paddingVertical: 14,       // Odpowiednia wysokość dla czytelności
    paddingHorizontal: 24,     // Zwiększony margines w poziomie
    borderRadius: 12,          // Subtelne, nieprzesadzone zaokrąglenia
    shadowColor: '#000',       // Neutralny kolor cienia
    shadowOffset: { width: 0, height: 4 }, // Subtelny cień
    shadowOpacity: 0.15,       // Mały poziom przejrzystości
    shadowRadius: 12,          // Miękki cień dla "profesjonalnego" efektu
    elevation: 5,              // Cień na Androidzie
  },
  buttonText: {
    color: '#fff',               // Tekst w wyraźnym kontraście
    fontSize: 16,                // Wystarczająco duży font, dobrze czytelny
    fontWeight: '600',           // Trochę grubsza czcionka dla akcji
    letterSpacing: 1,            // Trochę odstępu między literami
    textAlign: 'center',         // Wyśrodkowany tekst
    textTransform: 'uppercase',  // Dodanie nadrukowanych liter dla uwydatnienia
  },
  leftArrow: {
    position: 'absolute',
    left: 20,
    top: '50%',
    zIndex: 1,
  },
  rightArrow: {
    position: 'absolute',
    right: 20,
    top: '50%',
    zIndex: 1,
  },
  tooltip: {
    position: 'absolute',
    top: 70,
    backgroundColor: '#333333',
    opacity: 1,
    padding: 15,
    borderRadius: 10,
    zIndex: 2,
    alignItems: 'center',
  },
  tooltipText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center',
  },
  gotIt: {
    color: '#FF9900',
    fontWeight: 'bold',
  },




});

