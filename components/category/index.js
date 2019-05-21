/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

/*const Catalog = props => (
  <View style = {styles.baris}>
        <View style = {styles.background}>
           <Image
             style={styles.imagecatalog}
             source={{uri: props.uri}}
           />
           <Text style={styles.title} onPress={() => props.navigation.replace('Detailcategory')}>
             {props.productname} {'\n'}{'\n'}
             <Text style={styles.pricetitle}>
               Rp.{props.productprice}
             </Text>
           </Text>
        </View>
        <View style = {styles.background}>
           <Image
             style={styles.imagecatalog}
             source={{uri: props.uri}}
           />
           <Text style={styles.title}>
             {props.productname} {'\n'}{'\n'}
             <Text style={styles.pricetitle}>
               Rp.{props.productprice}
             </Text>
           </Text>
        </ View>
  </View>
);*/

type Props = {};
export default class App extends Component<Props> {

  static navigationOptions = {
    header : null
  };

  constructor(props){
    super(props);
    this.state = {
      pagecatalog : [],
    }
    navigationOptions = {
      header : null
    }
  }

  componentWillMount(){
    this.getdata();
  }

  getdata = () => {
    fetch('https://product-catalog-api.herokuapp.com/products/', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(res.result[0].productName);
      console.log(res.result.length);
      this.setState({
        pagecatalog : res.result
      })
    })
    .done();
  }

  movescreen = (detail) => {
    this.props.navigation.navigate('Detailcategory', { ...detail })
    console.log(detail);
  }

  render() {
    //const { id, nama_poli, nama_dokter, antrian_terisi, kode_poli, picture, tanggal } = this.props.navigation.state.params;
    console.log(this.props.navigation.state.params);

    return (
      <ScrollView style = {styles.container} >
        <View style = {styles.kolom}>
        {
          this.state.pagecatalog.map((item, i) => (
            <View style = {styles.baris} key={i}>
                  <View style = {styles.background}>
                     <Image
                       style={styles.imagecatalog}
                       source={{uri: item.productImage}}
                     />
                     <View style={styles.deskripsi}>
                       <Text style={styles.title}>
                         {item.productName} {'\n'}
                         <Text style={styles.pricetitle}>
                           Rp.{item.productPrice}
                         </Text>
                       </Text>
                       <TouchableOpacity onPress={() => this.movescreen(item)}>
                          <View style={styles.button}>
                             <Text style={styles.buttonText}>Lihat Detail</Text>
                          </View>
                       </TouchableOpacity>
                     </View>
                  </View>
                  <View style = {styles.background}>
                     <Image
                       style={styles.imagecatalog}
                       source={{uri: item.productImage}}
                     />
                     <View style={styles.deskripsi}>
                       <Text style={styles.title}>
                         {item.productName} {'\n'}
                         <Text style={styles.pricetitle}>
                           Rp.{item.productPrice}
                         </Text>
                       </Text>
                       <TouchableOpacity onPress={() => this.movescreen(item)}>
                            <View style={styles.button}>
                               <Text style={styles.buttonText}>Lihat Detail</Text>
                            </View>
                       </TouchableOpacity>
                     </View>
                  </ View>
            </View>
          ))

          /*this.state.pagecatalog.map((item, i) => <Catalog
            uri={item.productImage}
            productname={item.productName}
            productprice={item.productPrice}
            key={i}
          />)*/
        }
        </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
   },
   baris: {
     flexDirection: 'row',
     justifyContent: 'space-around'
   },
   kolom: {
     flexDirection: 'column',
   },
  background: {
    width: 180,
    height: 250,
    backgroundColor: 'powderblue',
    marginTop: 20
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  pricetitle: {
    fontSize: 13,
    color: 'red',
  },
  imagecatalog: {
    width: 180,
    height: 180
  },
  button: {
      width: 100,
      height: 25,
      padding: 5,
      backgroundColor: "green",
      alignContent: 'center',
      justifyContent: 'center',
      elevation: 5
   },
   buttonText:{
      color: "white",
      textAlign: "center",
      fontWeight: "600",
      fontSize: 10
   },
   deskripsi: {
     padding: 5,
   }
});
