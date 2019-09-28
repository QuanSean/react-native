import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, Platform, ImageBackground,TextInput,Picker } from 'react-native'
import { Header } from 'react-native-elements';
import Logo from './../../../Images/bamboo.png'
import IconBack from './../../../Images/iconBack.png'
import AvatarDefault from './../../../Images/card.png'
import IconEdit from './../../../Images/iconeEdit.png'
import ImagePicker from 'react-native-image-picker';

import { Dropdown } from 'react-native-material-dropdown';

// import ImagePicker from 'react-native-image-picker';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const options = {
    title: 'Select Avatar',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class NewProject extends Component {
    
    constructor(props){
        super(props);
        this.state={
            avatar:null,
            name:"",
            description:'',
            changeStatusPublic:false,
            idPublic:0,
            changeStatusCategory:false
        }
    }
    handleChoosephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
            //   this.setState({
            //     avatarSource: source,
            //   });
            }
          });

    }

    submit=()=>{
        if (this.state.changeStatusPublic&&this.state.name.length>0&&this.state.description.length>0&&this.state.changeStatusCategory)
        {
            var publicStatus=false;
            if (this.state.idPublic===1)
            {
                publicStatus=true
            }
            if (this.state.idPublic===2)
            {
                publicStatus=false
            }
            alert("Tên trò chơi: "+ this.state.name +". Mô tả: "+ this.state.description+". Public: "+publicStatus +". Id category: "+ this.state.idCategory)
        }

        else{
            alert("Vui lòng nhập đầy đủ thông tin")
        }

        
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={styles.header}
                    leftComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={IconBack} style={{ width: 20, height: 20, marginLeft: 20 }} />
                        </TouchableOpacity>}
                    centerComponent={
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                            BAMBOO QUEST
                        </Text>
                    }
                    rightComponent={
                        <Image source={Logo} style={{ width: 23, height: 23, marginRight: 20 }} />
                        
                    }
                />
                <View style={styles.image}>
                    <ImageBackground source={AvatarDefault} style={styles.imageAvatar} />
                    <View style={styles.iconChangeAvatar}>
                        <TouchableOpacity onPress={this.handleChoosephoto}>
                            <Image source={IconEdit} style={{ width: 23, height: 23 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.input}>
                    <Text style={styles.title}>Tên trò chơi</Text>
                    <View style={{width:width, alignItems:"center"}}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(name) => this.setState({name:name})}
                            value={this.state.name}
                            />
                    </View>

                </View>
                <View style={styles.input}>
                    <Text style={styles.title}>Mô tả</Text>
                    <View style={{width:width, alignItems:"center"}}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={(description) => this.setState({description:description})}
                            value={this.state.description}
                            />
                    </View>
                </View>
                
                <View >
                    {/* <Text style={styles.title}>Mô tả</Text> */}
                    <View style={{width:width, flexDirection:'row',justifyContent:"space-between", padding:10}}>
                    <Dropdown
                        labelFontSize={15}
                        containerStyle={styles.dropdown}
                        label='Chọn thể loại'
                        data={data}
                        onChangeText={(value, index, dada) => this.setState({changeStatusCategory:true,idCategory:index+1})}
                    />
                    <Dropdown
                        labelFontSize={15}
                        containerStyle={styles.dropdown}
                        label='Chọn chế độ'
                        data={data1}
                        onChangeText={(value, index, dada) => this.setState({changeStatusPublic:true,public:index+1})}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.btnSubmit} onPress={this.submit}>
                    <Text style={{fontWeight:"bold", fontSize:15, color:'#fff'}}>Tạo trò chơi</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
let data = [{
    value: 'Toán học',id:1
  }, {
    value: 'Vật lí',id:2
  }, {
    value: 'Ngữ văn', id:3
  }];

  let data1 = [{
    value: 'Công khai', id:1
  }, {
    value: 'Chỉ mình tôi', id:2
  }];

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    header:{
        backgroundColor:'#34af89',        
        shadowColor: "#35b69f",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },
    image:{
        marginTop:30,
        alignItems:'center'
    },
    imageAvatar:{
        height:height/4,
        width:width-20
    },
    iconChangeAvatar:{
        position:"absolute",
        width:40,
        height:40,
        bottom:10,
        justifyContent:'center',
        alignItems:'center',
        right:20,
        backgroundColor:"#000000b3",
        borderRadius:10,
    },
    input:{
        marginTop:20,
    },
    inputText:{
        width:width-20,
        height:height/20,
        borderColor:'#a0a0a0',
        borderWidth:1,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:10,
        fontSize:15
    },
    title:{
        padding:10,
        fontWeight:'bold',
        color:'#34af89',
        fontSize:15
    },
    dropdown:{
        width:width/2-20,
        padding:0,
        margin:0
    },
    btnSubmit:{
        width:width-20,
        height:height/17,
        backgroundColor:"#34af89",
        shadowColor: "#35b69f",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        borderRadius:6,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    }
})
