import React, {Component} from 'react';
import {Platform, Text,StyleSheet, View, TouchableOpacity, TextInput, Linking, ScrollView} from 'react-native';
import QRCode from 'react-native-qrcode';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class TestQR extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'hien'
        }
    }
    onPress = (e) => {
        Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
      }
    render(){
        return (
            <ScrollView style = {styles.iosStyle}>
            <View style = {styles.container}>
                <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text: text})}
                value={this.state.text}
                />
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>

                <QRCodeScanner
                        onRead={this.onPress.bind(this)}
                        topContent={
                        <Text style={styles.centerText}>
                            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                        </Text>
                        }
                        bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>OK. Got it!</Text>
                        </TouchableOpacity>
                        }
                    />
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    iosStyle: {
        marginTop: Platform.OS === 'ios' ? 50:0,
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
      centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },
      textBold: {
        fontWeight: '500',
        color: '#000',
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      },
})