import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../Styles/BasicStyle'

export default class TouchPin extends React.Component {

    state = {
        // isLogin: false,
        number: '',
        modalSetting: true
    }

    componentDidMount() {
    }


    render() {
        return (
            <Container>
                <Content>
                    <View style={{ marginTop: 50 }}>

                        <View style={{ marginBottom: 30 }}>
                            <Text style={{ textAlign: 'center', fontSize: 16 }}>กรุณากรอกรหัส PIN</Text>
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
                                <Image source={require('../Images/touch.png')}
                                    style={styles.picStyle} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnPhone, { margin: 10 }]}>
                                <Text>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnNullDel, { margin: 10 }]}>
                                <Icon name="delete" size={30} color="#959595" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ textAlign: 'center' }}>ลืมรหัส PIN?</Text>
                        </View>
                    </View>
                </Content>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalSetting}
                    onRequestClose={() => {
                        this.setState({ modalSetting: false });
                    }}>
                    <View
                        style={styles.modalShow}>
                        <View
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                width: '100%',
                            }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../Images/1.png')}
                                    style={styles.picStyle} />
                                <Text style={styles.font18Bold}>Touch ID for</Text>
                                <Text style={[styles.font18Bold, { marginBottom: 5 }]}>"CGS Application"</Text>
                                <Text style={styles.font14}>เข้าใช้งานด้วย Touch ID หรือ</Text>
                                <Text style={styles.font14}>ยกเลิกเพื่อกลับไปใช้รหัส PIN</Text>
                            </View>
                            <View style={styles.borderStyle} />
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <TouchableOpacity
                                    onPress={() => this.setState({ modalSetting: false })}>
                                    <Text style={styles.fontBlue}>Enter Password</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.borderStyle} />
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ modalSetting: false })
                                    }}>
                                    <Text style={[styles.fontBlue, { marginBottom: 15 }]}>ยกเลิก</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </Container>
        )
    }
}