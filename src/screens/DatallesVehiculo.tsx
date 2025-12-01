import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { Vehiculo } from '../models/vehiculo';

type DetallesVehiculoProps = {
  vehiculo: Vehiculo;
  onChange: (field: keyof Vehiculo, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

const DetallesVehiculo = ({
  vehiculo,
  onChange,
  onNext,
  onBack,
}: DetallesVehiculoProps) => {
  const isValid =
    vehiculo.placa.trim() !== '' &&
    vehiculo.nombreDuenio.trim() !== '' &&
    vehiculo.anio.trim() !== '' &&
    vehiculo.tipoGasolina.trim() !== '';

  return (
    <View style={styles.container}>
      <FormInput
        label="Placa"
        placeholder="ABC-1234"
        autoCapitalize="characters"
        value={vehiculo.placa}
        onChangeText={value => onChange('placa', value)}
      />

      <FormInput
        label="Nombre del dueño"
        placeholder="Juan Pérez"
        value={vehiculo.nombreDuenio}
        onChangeText={value => onChange('nombreDuenio', value)}
      />

      <FormInput
        label="Año"
        placeholder="2020"
        keyboardType="numeric"
        value={vehiculo.anio}
        onChangeText={value => onChange('anio', value)}
      />

      <FormInput
        label="Tipo de gasolina"
        placeholder="Extra / Súper / Diésel"
        value={vehiculo.tipoGasolina}
        onChangeText={value => onChange('tipoGasolina', value)}
      />

      <FormButton
        label="Regresar"
        onPress={onBack}
        style={styles.backButton}
      />

      <FormButton
        label="Continuar"
        onPress={onNext}
        disabled={!isValid}
        style={!isValid && styles.disabledButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    marginTop: 8,
    backgroundColor: '#0e3178ff',
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
  },
});

export default DetallesVehiculo;
