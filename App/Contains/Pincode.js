import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/BasicStyle'

export default class Pincode extends React.Component {

    state = {
        // isLogin: false,
        number: ''
    }

    componentDidMount() {
    }


    render() {
        return (
            <Container>
                <Content>
                    <View style={{ marginTop: 50 }}>

                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ textAlign: 'center', fontSize: 16 }}>ตั้งรหัส PIN CODE</Text>
                        </View>
                        <View style={{ alignSelf: 'center', marginBottom: 30, flexDirection: 'row', }}>
                            {this.state.number === '' ?
                                <>
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                </>
                                :
                                <>
                                    <TouchableOpacity style={styles.btnPinGreen} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                    <TouchableOpacity style={styles.btnPinWhite} />
                                </>
                            }
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}
                                onPress={() => {
                                    this.setState({ number: 5 })
                                    this.props.navigation.navigate('PincodeVerify')
                                }}>
                                <Text>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity style={[styles.btnNull, { margin: 10 }]}>

                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnNullDel, { margin: 10 }]}>
                                <Icon name="delete" size={30} color="#959595" />
                            </TouchableOpacity>
                        </View>
                    </View>


                </Content>
            </Container>
        )
    }
}