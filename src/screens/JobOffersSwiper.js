import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Alert} from "react-native";
import Swiper from "react-native-deck-swiper";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Arrow from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native";
import {PanGestureHandler} from 'react-native-gesture-handler';
import CustomButton from "../components/swiperbutton";


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


export const JobOffersSwiper = ({offers, onSwipeRight, onSwipeLeft}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showHint, setShowHint] = useState(true); // Stan kontrolujący tooltip
    const [noMoreOffers, setNoMoreOffers] = useState(false); // Flaga oznaczająca koniec ofert
    const navigation = useNavigation();
    const [isSwipingEnabled, setIsSwipingEnabled] = useState(true);
    const savedCards = 5;



    const ModernButton = ({title, onPress}) => {
        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon name="home" size={30} color="#FFFFFF"/>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        );
    };

    const IconButton = ({title, onPress}) => {
        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon name="home" size={24} color="#FFFFFF" style={styles.icon}/>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
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
            {noMoreOffers ? (
                <View style={styles.noOffersContainer}>
                    <Text style={styles.noOffersText}>Brak dostępnych ofert dla Ciebie.</Text>
                    <ModernButton
                        title="Wróć do Strony Głównej"
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>
            ) : (
                <>
                    <View style={styles.leftArrow}>
                        <Arrow name="arrow-back" size={40} color="#b0b0b0"/>
                        <Text style={styles.arrowtext}>Discard</Text>
                    </View>
                    <View style={styles.rightArrow}>
                        <Arrow name="arrow-forward" size={40} color="#b0b0b0"/>
                        <Text style={styles.arrowtext}>Save</Text>
                    </View>

                    <Swiper
                        cards={generatedOffers}
                        renderCard={(offer) => (
                            <View style={[styles.card, styles.center]}>
                                <View style={styles.center}>
                                    <Icon name="person" size={60} color="#87CEFA" />
                                    <Text style={styles.description}>{offer.description}</Text>
                                </View>
                                <View style={[styles.center, styles.dollarcircle]}>
                                <Icon name="attach-money" size={20} color="#36454F" />
                                </View>
                                <View style={styles.center}>
                                    <Text style={styles.salary}>
                                        {offer.salary.min} - {offer.salary.max}
                                    </Text>
                                </View>

                                <View style={styles.dotcontainer}>
                                    <View style={styles.smallDot} />
                                    <View style={styles.bigDot} />
                                    <View style={styles.smallDot} />
                                </View>



                                {/* Firma */}
                                <View style={styles.row}>
                                    <Icon name="business" size={20} color="#262E38" />
                                    <Text style={styles.companydetails}>{offer.company}</Text>
                                </View>

                                {/* Lokalizacja */}
                                <View style={styles.row}>
                                    <Icon name="place" size={20} color="#262E38" />
                                    <Text style={styles.location}>{offer.location}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Icon name="assignment" size={20} color="#262E38" />
                                    <Text style={styles.companydetails}>Typ umowy: {offer.contractType || 'Brak danych'}</Text>

                                </View>
                                <View style={styles.row}>
                                    <Icon name="work" size={20} color="#262E38" />
                                <Text style={styles.companydetails}>
                                    Praca {offer.isRemote ? 'zdalna' : 'w biurze'}
                                </Text>
                                </View>

                                <View style={styles.dotcontainer}>
                                    <View style={styles.smallDot} />
                                    <View style={styles.bigDot} />
                                    <View style={styles.smallDot} />
                                </View>


                                {/* Długi opis */}
                                {offer.longDescription && (
                                    <View style={styles.longDescContainer}>
                                        <Text style={styles.longDescription}>{offer.longDescription}</Text>
                                    </View>
                                )}
                                <View style={styles.dotcontainer}>
                                    <View style={styles.smallDot} />
                                    <View style={styles.bigDot} />
                                    <View style={styles.smallDot} />
                                </View>

                                {/* Kontakt */}
                                <View style={styles.row}>
                                    <Icon name="email" size={20} color="#FFB6C1" />
                                    <Text style={styles.contact}>{offer.contact}</Text>
                                </View>
                                <Text style={styles.companydetails}>Opublikowano: {offer.date || 'Nieznana data'}</Text>

                            </View>

                        )}
                        onSwipedRight={(index) => {
                            // Akcja dla swipe w prawo
                            //alert(`Zaakceptowano: ${generatedOffers[index].description}`);
                            onSwipeRight && onSwipeRight(generatedOffers[index]); // Wywołaj funkcję callback, jeśli jest przekazana
                        }}
                        onSwipedLeft={(index) => {
                            // Akcja dla swipe w lewo
                            //alert(`Odrzucono: ${generatedOffers[index].description}`);
                            onSwipeLeft && onSwipeLeft(generatedOffers[index]); // Wywołaj funkcję callback, jeśli jest przekazana
                        }}
                        onSwiped={(index) => setCurrentIndex(index + 1)} // Zwiększamy aktualny indeks po każdym swipe
                        onSwipedAll={() => setNoMoreOffers(true)}
                        cardIndex={currentIndex}
                        stackSize={3}
                        disableTopSwipe
                        disableBottomSwipe
                        backgroundColor={'#262E38'}
                        verticalSwipe={false}
                        horizontalSwipe={isSwipingEnabled}
                        preventSwipe={!isSwipingEnabled ? ['left', 'right'] : []} // Dynamiczne blokowanie swipe


                    />
                </>
            )}
            <View style={[styles.buttons, styles.buttonsContainer]}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => alert('Przejdź do zapisanych kart!')}>
                    <CustomButton
                        text={"Zapisane"}
                        iconName="description" // Ikona z MaterialIcons
                        iconColor = "#36454F"
                        backgroundColor="#E6E6FA"
                        textColor = "#36454F"
                        onPress={() => alert("Kliknięto Akceptuj!")}
                    />

                    {savedCards > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{savedCards}</Text>
                        </View>
                    )}
                </TouchableOpacity>
                <CustomButton
                    text={"Aplikuj"}
                    iconName="send"
                    iconColor = "#36454F"
                    textColor = "#36454F"
                    backgroundColor="#71D97B"
                    onPress={() => alert("Kliknięto Akceptuj!")}
                />
                <CustomButton
                    text={"Profil"}
                    iconName="account-circle"
                    textColor = "#36454F"
                    iconColor = "#36454F"
                    backgroundColor="#FF9900"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#262E38',

    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#262E38',
    },

    card: {
        flex: 1,
        height: 300,
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 10,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#5b7fa1",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: {width: 0, height: 5},
    },
    center: {
        justifyContent: 'center', // Wypośrodkowanie w pionie
        alignItems: 'center', // Wypośrodkowanie w poziomie
        marginBottom: 5,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    salary: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        marginVertical: 5,
        marginBottom: 25,

    },
    separator: {
        height: 1, // Wysokość linii
        backgroundColor: '#ffffff', // Kolor linii (np. jasna szarość)
        marginVertical: 15, // Odstępy w pionie od innych elementów
        width: "50%",
    },

    description: {
        fontSize: 16,
        marginVertical: 5,
        textAlign: "center",
        color: "#ffffff",
        marginBottom: 20,
        marginLeft: 5,
        marginTop: 5,

    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    contact: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
        marginLeft: 5,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    longDescContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    longDescription: {
        fontSize: 14,
        color: '#ffffff',
        lineHeight: 20,
        marginBottom: 15,
        marginTop: 15,

    },
    companydetails: {
        fontSize: 14, // Trochę większy rozmiar tekstu dla nazwy firmy
        color: '#ffffff', // Czarny lub neutralny kolor
        fontWeight: '500', // Pogrubienie, aby wyróżnić firmę
        marginBottom: 1, // Odstęp od lokalizacji
        marginLeft: 5
    },
    location: {
        fontSize: 16, // Mały, ale czytelny rozmiar tekstu
        color: '#ffffff', // Szary kolor dla lokalizacji
        fontStyle: 'italic', // Kursywa, aby wyróżnić miejsce
        marginBottom: 1, // Odstęp od kolejnych elementów
        marginLeft: 5,
    },
    buttonsContainer: {
        margin: -5,
        position: 'absolute', // Przyciski zawsze na dole
        bottom: 20, // Odstęp od dolnej krawędzi
        left: 20,
        right: 20,
        flexDirection: 'row', // Układ poziomy
        justifyContent: 'center', // Odstępy między przyciskami
        zIndex: 10,
    },

    button: {
        justifyContent: "center", // Centers content vertically within the button
        alignItems: "center", // Centers content horizontally within the button
        flexDirection: "row", // Keeps elements in a row if there are multiple
        backgroundColor: '#FF9900', // Profesjonalny niebieski jako kolor akcentowy
        paddingVertical: 10,       // Odpowiednia wysokość dla czytelności
        paddingHorizontal: 20,     // Zwiększony margines w poziomie
        borderRadius: 12,          // Subtelne, nieprzesadzone zaokrąglenia
        shadowColor: '#000',       // Neutralny kolor cienia
        shadowOffset: {width: 0, height: 4}, // Subtelny cień
        shadowOpacity: 0.25,       // Mały poziom przejrzystości
        shadowRadius: 12,          // Miękki cień dla "profesjonalnego" efektu
        elevation: 5,              // Cień na Androidzie
    },
    buttonText: {
        color: '#fff',               // Tekst w wyraźnym kontraście
        fontSize: 15,                // Wystarczająco duży font, dobrze czytelny
        fontWeight: '600',           // Trochę grubsza czcionka dla akcji
        letterSpacing: 1,            // Trochę odstępu między literami
        textAlign: 'center',         // Wyśrodkowany tekst
        textTransform: 'uppercase',  // Dodanie nadrukowanych liter dla uwydatnienia
    },
    leftArrow: {
        position: 'absolute',
        left: 25,
        top: '8%',
        zIndex: 100,
    },
    rightArrow: {
        position: 'absolute',
        right: 25,
        top: '8%',
        zIndex: 100,
    },
    tooltip: {
        position: 'absolute',
        top: 70,
        backgroundColor: '#333333',
        opacity: 1,
        padding: 15,
        borderRadius: 10,
        zIndex: 101,
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
    noOffersContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noOffersText: {
        fontSize: 18,
        color: "#929090",
        marginBottom: 20,
        textAlign: "center",
    },
    backButton: {
        backgroundColor: "#506c88",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    backButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    arrowtext: {
        marginTop: 3, // Odstęp między strzałką a tekstem
        fontSize: 12, // Rozmiar tekstu
        color: '#b0b0b0', // Kolor tekstu (możesz dostosować)
        fontWeight: 'bold', // Pogrubienie dla lepszej widoczności
        alignItems: "center",
        textAlign: "center",
    },
    iconContainer: {
        position: 'relative', // Potrzebne do ustawienia absolutnego pozycjonowania "badge"
    },
    badge: {
        position: 'absolute', // Pozycja umożliwiająca overlay nad ikoną
        top: '50%', // Przesunięcie do środka w pionie
        left: '50%', // Przesunięcie do środka w poziomie
        transform: [
            { translateX: -5 }, // Przesunięcie o połowę szerokości (korekta)
            { translateY: -40 }, // Przesunięcie o połowę wysokości (korekta)
        ],
        backgroundColor: 'red', // Czerwone tło
        borderRadius: 50, // Zaokrąglony kształt (idealne koło)
        width: 30, // Szerokość kółka
        height: 30, // Wysokość kółka
        justifyContent: 'center',
        borderWidth: 1,
        alignItems: 'center',
    },
    badgeText: {
        color: 'white', // Biały kolor tekstu
        fontSize: 12, // Rozmiar tekstu
        fontWeight: 'bold', // Pogrubiona czcionka
    },
    dollarcircle: {
        width: 30, // Szerokość koła
        height: 30, // Wysokość koła
        borderRadius: 40, // Dzięki borderRadius tworzymy kształt koła
        backgroundColor: '#FF9900', // Kolor tła koła
        justifyContent: 'center', // Wyśrodkowanie ikony w pionie
        alignItems: 'center', // Wyśrodkowanie ikony w poziomie
    },
    smallDot: {
        width: 8, // Diameter for small dots
        height: 8,
        borderRadius: 4, // Makes the shape circular
        backgroundColor: "#262E38", // Set the color of the dot
        marginHorizontal: 5, // Add some space between the dots
    },
    bigDot: {
        width: 12, // Diameter for the bigger dot
        height: 12,
        borderRadius: 6, // Circular shape for the bigger dot
        backgroundColor: "#262E38", // Color of the dot
        marginHorizontal: 5, // Space on either side
    },
    dotcontainer: {
        flexDirection: "row", // Align dots horizontally
        justifyContent: "center", // Center them horizontally
        alignItems: "center", // Align them vertically
        margin: 10,
    },





});

