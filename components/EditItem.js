import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native'

const EditItem = (props) => {

    const [title, setTitle] = React.useState("")
    const [desc, setDesc] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [country, setCountry] = React.useState("")
    const [city, setCity] = React.useState("")
    const [image, setIMG] = React.useState([""])
    const [price, setPrice] = React.useState("")
    const [deliveryType, setDType] = React.useState("")


    async function onEdit() {
        await fetch(props.apiURI + '/items' + new URLSearchParams({
            date: 'desc',
        }), {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer " + props.userData.token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "description": desc,
                "category": category,
                "location": {
                    "country": country,
                    "city": city
                },
                "images": image,
                "price": price,
                "deliveryType": deliveryType
            })
        })
            .then(response => {
                if (response.ok == false) {
                    throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
                }
                return response.json();
            })
            .then(json => props.navigation.reset({
                index: 0,
                routes: [{ name: 'TodoApp' }],
            }))
            .catch(error => {
                console.log("Error message:")
                console.log(error.message)
            });
    }


    const item = props.itemToEdit
    return (
        <View style={styles.screen}>
            <Text>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                placeholder={item.title}
                onChangeText={value => setTitle(value)}
            />
            <Text>Description</Text>
            <TextInput
                style={styles.input}
                value={desc}
                placeholder={item.description}
                onChangeText={value => setDesc(value)}
            />
            <Text>Category</Text>
            <TextInput
                style={styles.input}
                value={category}
                placeholder={item.category}
                onChangeText={value => setCategory(value)}
            />
            <Text>Images link</Text>
            <TextInput
                style={styles.input}
                value={image}
                placeholder='Link to images'
                onChangeText={value => setIMG([value])}
            />
            <Text>Location</Text>
            <TextInput
                style={styles.input}
                value={country}
                placeholder={item.location.country}
                onChangeText={value => setCountry(value)}
            />
            <TextInput
                style={styles.input}
                value={city}
                placeholder={item.location.city}
                onChangeText={value => setCity(value)}
            />
            <Text>Price</Text>
            <TextInput
                style={styles.input}
                value={price}
                placeholder='$'
                onChangeText={value => setPrice(value)}
            />
            <Text>Delivery Type</Text>
            <TextInput
                style={styles.input}
                value={deliveryType}
                placeholder={item.deliveryType}
                onChangeText={value => setDType(value)}
            />
            <TouchableHighlight onPress={() => onEdit()}>
                <View style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Edit Item</Text>
                </View>
            </TouchableHighlight>
            <Button
                title="Cancel"
                color="#000000"
                onPress={
                    () => props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'TodoApp' }],
                    })
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgb(227, 178, 0)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        height: 32,
        width: '90%',
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 20
    },
    primaryButton: {
        backgroundColor: 'rgb(0, 153, 51)',
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
        marginBottom: 5
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 20
    }
});


export default EditItem
