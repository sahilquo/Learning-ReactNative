import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boldText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
    },
    normalText: {
        fontFamily: 'Nunito-Regular',
        fontSize: 16,
    }
});

export const ratingImages = {
    ratings: {
        '1': require('../assets/images/rating-1.png'),
        '2': require('../assets/images/rating-2.png'),
        '3': require('../assets/images/rating-3.png'),
        '4': require('../assets/images/rating-4.png'),
        '5': require('../assets/images/rating-5.png'),
    }
}