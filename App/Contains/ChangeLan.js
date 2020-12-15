import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab } from 'native-base';
import styles from '../Styles/BasicStyle'

export default class ChangeLan extends React.Component {

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
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>ยินดีต้อนรับ</Text>
                        <Text style={{ fontSize: 14 }}>กรุณาเลือกภาษา</Text>

                    </View>

                    <View style={{ marginTop: 50}}>
                        <TouchableOpacity style={styles.btnGreen}>
                            <Text style={styles.fontWhite}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnGreen} onPress={() => this.props.navigation.navigate('Policy')}>
                            <Text style={styles.fontWhite}>ไทย</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}