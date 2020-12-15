import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles/BasicStyle'

export default class Policy extends React.Component {

    state = {
        // isLogin: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#e5e5e5', marginTop: 0, borderBottomWidth: 0, flexDirection: 'row', alignItems: 'center' }}>
                    <Left>
                        <TouchableOpacity>
                            <Icon name="keyboard-backspace" size={30} color="#000" />
                        </TouchableOpacity>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <Content>
                    <View style={{ flex: 1, marginTop: 50 }}>
                        <View style={{ flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#e5e5e5' }}>
                            <Icon name="note-text-outline" size={30} />
                            <Text style={{ marginTop: 5, fontSize: 18}}>เงื่อนไขการใช้บริการ</Text>
                        </View>
                    </View>
                </Content>
                <View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity style={styles.btnReject}>
                            <Text style={styles.fontGreen}>ปฏิเสธ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnConfirm} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.fontWhite}>ยอมรับ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        )
    }
}