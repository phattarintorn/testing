import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab } from 'native-base';
import styles from '../Styles/BasicStyle'

export default class Login extends React.Component {

    state = {
        // isLogin: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.centerLeft}>
                        <TextInput
                            style={styles.inputs}
                            placeholder="ชื่อผู้ใช้งาน"
                            placeholderTextColor="#939598"
                            keyboardType="default"
                            secureTextEntry={true}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        // value={this.state.password}
                        // onChangeText={(password) =>
                        //     this.setState({ password: password, errorPassword: false })
                        // }
                        />
                        <View style={{ margin: 5 }} />
                        <TextInput
                            style={styles.inputs}
                            placeholder="รหัสผ่าน"
                            placeholderTextColor="#939598"
                            keyboardType="default"
                            secureTextEntry={true}
                            underlineColorAndroid="#939598"
                            autoCapitalize="none"
                        // value={this.state.password}
                        // onChangeText={(password) =>
                        //     this.setState({ password: password, errorPassword: false })
                        // }
                        />

                    </View>

                    <View style={{  }}>
                        <View style={{ alignSelf: 'flex-start' }}>
                            <Text>บันทึกการเข้าสู่ระบบ</Text>
                        </View>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <Text>ลืมรหัสผ่าน?</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity style={styles.btnGreen} onPress={() => this.props.navigation.navigate('Otp')}>
                            <Text style={styles.fontWhite}>เข้าสู่ระบบ</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 10,
                                marginBottom: 10,
                                padding: 5
                            }}>
                            <View
                                style={{
                                    borderBottomColor: '#C3C3C3',
                                    borderBottomWidth: 1,
                                    width: 110,
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}
                            />
                            <Text style={{ marginLeft: 10, marginRight: 10, color: '#C3C3C3' }}>
                                ไม่มีบัญชีผู้ใช้
                            </Text>
                            <View
                                style={{
                                    borderBottomColor: '#C3C3C3',
                                    borderBottomWidth: 1,
                                    width: 110,
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}
                            />
                        </View>

                        <TouchableOpacity style={styles.btnWhite}>
                            <Text style={styles.fontGreen}>เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}