import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Pamiętaj, aby zainstalować react-native-vector-icons

const CustomButton = ({
                          text = "Przycisk",     // Domyślny tekst, jeśli nie zostanie podany
                          onPress,              // Funkcja wywoływana po kliknięciu
                          iconName = null,      // Nazwa ikony
                          iconSize = 24,        // Rozmiar ikony
                          iconColor = "#FFF",   // Kolor ikony
                          backgroundColor = "#007BFF", // Kolor tła przycisku
                          textColor = "#FFF",   // Kolor tekstu
                          style = {},           // Dodatkowe style przekazywane do przycisku
                      }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }, style]}
            onPress={onPress}
        >
            {iconName && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                    style={styles.icon}
                />
            )}
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',             // Wyświetlaj ikonę i tekst w jednym wierszu
        alignItems: 'center',             // Wyrównaj w pionie zawartość przycisku
        justifyContent: 'center',         // Wyrównaj całą zawartość przycisku
        paddingVertical: 10,             // Pionowe odstępy
        paddingHorizontal: 20,           // Poziome odstępy
        borderRadius: 8,                 // Zaokrąglenie przycisku
        shadowColor: '#000',             // Subtelny cień
        shadowOpacity: 0.1,              // Przejrzystość cienia
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        borderWidth: 1,
        elevation: 3,                    // Android: Głębia cienia
    },
    icon: {
        marginRight: 8,                  // Odstęp pomiędzy ikoną a tekstem
    },
    text: {
        fontSize: 16,                    // Rozmiar tekstu
        fontWeight: 'bold',              // Pogrubienie tekstu
    },
});

export default CustomButton;