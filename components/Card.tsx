import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';


export type CardProps = {
    id?: string | number;
    name?: string;
    surname?: string;
    photo?: string;
    onPress?: () => void;
    username?: string;
};


export const Card: React.FC<CardProps> = ({ name, surname, photo, onPress, username }) =>
{
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F6EBE6', }}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.card}>
                    <Image source={{ uri: photo }} style={styles.photo} />
                    <View style={styles.textContainer}>
                        <Text style={styles.name} >{name}</Text>
                        <Text style={styles.surname}>{surname}</Text>
                        <Text style={styles.username}>Nick: {username}</Text>
                    </View>
                </View>
                <View>
                    <FontAwesome name="bookmark" size={20} color="#6c4eff" style={styles.icon} />
                </View>
            </TouchableOpacity>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        left: '13%',
        width: 350,
        height: 130,
        borderRadius: 20,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,

    },
    photo: {
        height: 115,
        width: 95,
        marginRight: 40,
        borderRadius: 40,
        left: 5,
        borderColor: '#000000',
        borderWidth: 2
    },
    textContainer: {
        justifyContent: 'center',
        marginBottom: 15

    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    surname: {
        fontSize: 16,
        textAlign: 'center'
    },
    username: {
        fontSize: 17,
        top: 30,
        left: -35
    },
    icon: {
        left: '81%',
        bottom: 40
    }
});
