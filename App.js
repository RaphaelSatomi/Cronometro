import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default class PrimeiroProjeto extends Component{

    constructor(props) {
        super(props);
        this.state = {n:0, btn:'START'};
        this.timer = null;

        this.start = this.start.bind(this);
        this.reset = this.reset.bind(this);
    }

    start(){
        let s = this.state;
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;

            s.btn = "START";
            this.setState(s);
        }else{
            this.timer = setInterval(()=>{
                s.n += 0.1;
                s.btn = "STOP";
                
                this.setState(s);
            }, 100);
        }


    }
    reset(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
        let s = this.state;
        s.n = 0;
        s.btn = "START";

        this.setState(s);
    }

    render() {
        return(
            <View style={styles.body}>
                <Image source={require("./images/relogio.png")}/>
                <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn} onPress={this.start}>
                        <Text style={styles.btnText}>{this.state.btn}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.reset}>
                        <Text style={styles.btnText}>RESET</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body:{
        paddingTop:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2c1f30'
    },
    timer:{
        color:'#baa07a',
        fontSize:80,
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:-160
    },
    btnArea:{
        flexDirection:'row',
        height:40,
        marginTop:80
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#886532',
        height:40,
        borderRadius:5,
        margin:10
    },
    btnText:{
        fontSize:17,
        fontWeight:'bold',
        color:'#FFF'
    }
})