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
import OTPTextInput from 'react-native-otp-textinput'
import styles from '../Styles/BasicStyle'

export default class Verify extends React.Component {

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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')}>
                            <Icon name="keyboard-backspace" size={30} color="#000" />
                        </TouchableOpacity>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <Content>
                    <View style={{ marginTop: 20 }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pincode')}>
                            <View style={{ margin: 10 }}>
                                <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 20 }}>ยืนยันตัวตน</Text>
                                <Text style={{ textAlign: 'left', marginTop: 10, fontSize: 16 }}>กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ</Text>
                                <Text style={{ textAlign: 'left', marginTop: 10, fontSize: 16 }}>082-XXX-XXXX</Text>
                            </View>

                            <View>
                                <OTPTextInput ref={e => (this.otpInput = e)} inputCount={6} tintColor='#DCDCDC'>
                                </OTPTextInput>
                            </View>

                            <View style={{ marginTop: 50 }}>
                                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16, color: '#949494' }}>หากคุณไม่ได้รับรหัส?</Text>
                                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16, color: '#015744' }}>ส่งรหัสใหม่ (57)</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}