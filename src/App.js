import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const FONT_COLOR_GITHUB = '#C9D1D9';
const FONT_COLOR_DARK_GITHUB = '#4F565E';
const COLOR_GITHUB = '#010409';
const IMAGE_PERFIL = 'https://avatars.githubusercontent.com/u/89342683?v=4';
const URL_GITHUB = 'https://github.com/Lucas-Pavao';
const App = () => {
  const handlePressGoToGitHub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(URL_GITHUB);

    if (res) {
      console.log('Link aprovado');
      await Linking.openURL(URL_GITHUB);
    } else {
      console.log('Link negado');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={COLOR_GITHUB} barStyle={'light-content'} />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: IMAGE_PERFIL}} />
        <Text style={[style.defaultText, style.name]}>Lucas</Text>
        <Text style={[style.defaultText, style.nickName]}>Lucas-Pavao</Text>
        <Text style={[style.defaultText, style.description]}>
          Estudante de Analise e desenvolvimento de sistemas.
        </Text>
      </View>
      <Pressable onPress={handlePressGoToGitHub}>
        <View style={[style.button]}>
          <Text style={[style.defaultText, style.textButton]}>
            Open in gitHub
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR_GITHUB,
    flex: 1, //expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: FONT_COLOR_GITHUB,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickName: {
    fontSize: 18,
    color: FONT_COLOR_DARK_GITHUB,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: FONT_COLOR_DARK_GITHUB,
    borderRadius: 10,
    padding: 20,
  },
});
