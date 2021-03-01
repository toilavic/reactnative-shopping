import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import {
    Svg,
    Polygon
} from 'react-native-svg';
import { CheckBox } from 'react-native-elements'
import { images, COLORS, FONTS, SIZES } from '../constants';
import ModalDropdown from 'react-native-modal-dropdown';
import { Icon } from 'react-native-elements'

const Home = (props) => {

    const [checked, setChecked] = React.useState(false)
    const [recentlyViewed, setRecentlyViewed] = React.useState([]);
    const [city, setCity] = React.useState(['Oulu']);
    const [category, setCategory] = React.useState(['Shoes']);

    // Dummy Data
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186"
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
        },
    ]);


    function onLastest() {
        setChecked(!checked)
        const order = 'desc'
        if (!checked) {
            fetch(props.apiURI + '/items?date=' + order, { method: 'GET' })
                .then(response => {
                    if (response.ok == false) {
                        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
                    }
                    return response.json();
                })
                .then(json => {
                    setRecentlyViewed(json)
                    console.log(json);
                })
                .catch(error => {
                    console.log("Error message:")
                    console.log(error.message)
                });
        } else APIItems();
    }

    function onSelectCategory(value) {
        console.log(value)
            fetch(props.apiURI + '/items?category=' + value, { method: 'GET' })
                .then(response => {
                    if (response.ok == false) {
                        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
                    }
                    return response.json();
                })
                .then(json => {
                    setRecentlyViewed(json)
                    console.log(json);
                })
                .catch(error => {
                    console.log("Error message:")
                    console.log(error.message)
                });
    }

    function onSelectCity(value) {
        console.log(value)
            fetch(props.apiURI + '/items?city=' + value, { method: 'GET' })
                .then(response => {
                    if (response.ok == false) {
                        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
                    }
                    return response.json();
                })
                .then(json => {
                    setRecentlyViewed(json)
                    console.log(json);
                })
                .catch(error => {
                    console.log("Error message:")
                    console.log(error.message)
                });
    }


    function renderTrendingShoes(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: SIZES.padding, }
        } else {
            trendingStyle = {}
        }

        return (
            <TouchableOpacity
                style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>

                <View style={[{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: SIZES.base,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginRight: SIZES.padding,
                    paddingLeft: SIZES.radius,
                    paddingRight: SIZES.padding,
                    paddingBottom: SIZES.radius,
                    backgroundColor: item.bgColor
                }, styles.trendingShadow]}>
                    <View style={{ height: '35%', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
                    </View>
                </View>

                <View style={{ position: 'absolute', top: 27, right: 0, width: "95%", height: "100%" }}>
                    <Svg height="100%" width="100%">
                        <Polygon
                            points="0,0 160,0 160,80"
                            fill="white"
                        />
                    </Svg>
                </View>

                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 50,
                        right: 0,
                        width: "98%",
                        height: 80,
                        transform: [
                            { rotate: '-15deg' }
                        ]
                    }}
                />
            </TouchableOpacity>
        )
    }

    function renderRecentlyViewed(item, index) {
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row' }}
            >
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={item.images}
                        resizeMode="contain"
                        style={{
                            width: 130,
                            height: 100,
                        }}
                    />
                </View>
                <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>
                    <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{item.title}</Text>
                    <Text style={{ color: COLORS.lightGray, ...FONTS.body5}}>{item.description}</Text>
                    <Text style={{ ...FONTS.h3 }}>{item.price}$</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function APIItems() {
        fetch(props.apiURI + '/items', {
          method: 'GET'
        })
        .then(response => {
          if (response.ok == false) {
            throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
          }
          return response.json();
        })
        .then(json => {
          console.log("Received following JSON");
          let tempCate = [];
          let tempCity = [];
          setRecentlyViewed(json)

          json.map(e => {
            tempCate.push(e.category)
            tempCity.push(e.location.city)
          })
        // remove duplicate data
        var uniqueCate = tempCate.filter(function(item, pos) {
            return tempCate.indexOf(item) == pos;
        })  
        var uniqueCity = tempCity.filter(function(item, pos) {
            return tempCity.indexOf(item) == pos;
        })  
          setCategory(uniqueCate)
          setCity(uniqueCity)
          console.log(json);
        })
        .catch(error => {
          console.log("Error message:")
          console.log(error.message)
        });
    }

    useEffect(() => {
        APIItems();
    },[]);

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold }}>TRENDING SHOES</Text>

            <View style={{ height: 260, marginTop: SIZES.radius }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderTrendingShoes(item, index)}
                />
            </View>
            {/* select btn */}
            <View style={{ flex: 1, justifyContent: 'center', marginTop: -170, height: 100}}>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <CheckBox
                            style={{ width: '50%', padding: 1 }}
                            rightTextStyle={{ marginLeft: 0, paddingLeft: 0 }}
                            isChecked={true}
                            title='Lastest'
                            checked={checked}
                            onPress={onLastest}
                        />
                        {/* <Icon
                            raised
                            iconStyle={{ fontSize: 19 }}
                            name='edit'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => onEdit(item)} /> */}
                        <ModalDropdown options={category}
                                        defaultValue={'Category'}
                                        style={{ width: '50%', paddingBottom: 10, marginLeft: 30 }}
                                        textStyle={{fontSize:14}}
                                        dropdownStyle={{width: 100}}
                                        onSelect={(index, value) => onSelectCategory(value)}
                        />
                        <ModalDropdown options={city} 
                                        defaultValue={'City'}
                                        style={{ width: '50%', paddingBottom: 10, marginLeft: -80 }}
                                        textStyle={{fontSize:14}}
                                        onSelect={(index, value) => onSelectCity(value)}
                        />
                        
                    </View>

                </View>
            </View>

                <View
                    style={[{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: -150,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: COLORS.white,
                        display: 'inline'
                    }, styles.recentContainerShadow]}
                >



                
                <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    trendingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    recentContainerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})

export default Home;