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

export default class TouchID extends React.Component {

    state = {
        // isLogin: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#fff', marginTop: 0, borderBottomWidth: 0, }} noShadow={true}>
                    <Left />
                    <Body />
                    <Right />
                </Header>
                <Content>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 20 }}>Touch ID</Text>
                            <Text style={{ textAlign: 'left', marginTop: 10, fontSize: 16 }}>ตั้งค่าล็อคอินด้วยลายนิ้วมือ</Text>
                            <Text style={{ textAlign: 'left', marginTop: 10, fontSize: 16 }}>เพื่อการเข้าถึงที่รวดเร็วขึ้น</Text>
                        </View>

                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                source={require('../Images/touch.png')}
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
                    </View>

                    <View style={{ marginTop: 50 }}>
                        <TouchableOpacity style={styles.btnGreen}>
                            <Text style={styles.fontWhite}>ตั้งค่าลายนิ้วมือ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnallWhite} onPress={() => this.props.navigation.navigate('TouchPin')}>
                            <Text style={styles.fontGreen}>ข้าม</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}