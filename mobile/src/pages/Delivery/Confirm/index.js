import React, { useState } from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BackgroundHeader } from '../../../components/BackgroundHeader';
import api from '../../../services/api';

import { Container, Block, BlockInside, Text, Camera, Image } from './styles';

export default function Confirm({ navigation }) {
  const deliveryId = navigation.getParam('delivery_id');
  const [cameraVisible, setCameraVisible] = useState(false);
  const [file, setFile] = useState(null);

  async function takePicture(camera) {
    const data = await camera.takePictureAsync({ quality: 0.5, base64: true });
    console.tron.log(data);
    setCameraVisible(false);
    setFile(data.uri);
  }

  async function confirmDelivery() {
    const data = new FormData();
    const extention = file.split('.').pop();

    data.append('file', {
      uri: file,
      name: `assinatura.${extention}`,
      type: `image/${extention}`,
    });

    await api.put(`delivery/${deliveryId}/finish`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    navigation.navigate('Deliveries');
  }

  return (
    <Container>
      <BackgroundHeader />

      {cameraVisible && (
        <Camera
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <Text>Aguarde..</Text>;
            return (
              <TouchableOpacity onPress={() => takePicture(camera)}>
                <Icon name="photo-camera" size={50} color="#FFF" />
              </TouchableOpacity>
            );
          }}
        </Camera>
      )}

      {!cameraVisible && (
        <Block>
          <BlockInside>
            <Text>Tire uma foto da assinatura</Text>

            {!cameraVisible && file === null && (
              <TouchableOpacity onPress={() => setCameraVisible(true)}>
                <Icon name="photo-camera" size={40} color="#333" />
              </TouchableOpacity>
            )}

            {!cameraVisible && file !== null && (
              <Image source={{ uri: file }} />
            )}
          </BlockInside>

          {file && (
            <Button
              onPress={() => setFile(null)}
              color="#E74040"
              title="Cancelar"
            />
          )}
          <Button onPress={confirmDelivery} color="#7d40e7" title="Enviar" />
        </Block>
      )}
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
