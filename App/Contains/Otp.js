import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles/BasicStyle'

export default class Otp extends React.Component {

    state = {
        // isLogin: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#fff', marginTop: 0, borderBottomWidth: 0, }} noShadow={true}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name="keyboard-backspace" size={30} color="#000" />
                        </TouchableOpacity>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <Content>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                source={require('../Images/otp.png')}
                                style={{
                                    width: 100,
                                    height: 100,
                                    position: 'relative',
                                    resizeMode: 'contain',
                                    marginTop: 25,
                                    marginBottom: 20,
                                }}
                            />
                        </View>
                        <View>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
                            <Text style={[styles.fontGreen, { textAlign: 'center', marginTop: 10, fontSize: 18 }]}>082-XXX-8998</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 50 }}>
                        <TouchableOpacity style={styles.btnGreen} onPress={() => this.props.navigation.navigate('Verify')}>
                            <Text style={styles.fontWhite}>ขอรหัส OTP</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, color: '#939598', textAlign: 'center' }}>กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}