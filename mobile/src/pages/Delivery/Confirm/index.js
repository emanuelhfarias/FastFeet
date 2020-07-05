import React from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BackgroundHeader } from '../../../components/BackgroundHeader';

import { Container, Block, BlockInside, Text } from './styles';

export default function Confirm() {
  async function takePicture(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  }

  return (
    <Container>
      <BackgroundHeader />

      <Block>
        <BlockInside>
          <Text>Tire uma foto da assinatura</Text>

          <RNCamera
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <></>;
              return (
                <TouchableOpacity onPress={() => takePicture(camera)}>
                  <Icon name="photo-camera" size={40} color="#333" />
                </TouchableOpacity>
              );
            }}
          </RNCamera>
        </BlockInside>
        <Button onPress={() => {}} color="#7d40e7" title="Enviar" />
      </Block>
    </Container>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#7d40e7', elevation: 0 },
  headerTitleStyle: { fontWeight: 'normal', fontSize: 16 },
  headerLeftContainerStyle: { left: 15 },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
