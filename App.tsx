import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useVehiculoForm, TOTAL_STEPS } from './src/state/useVehiculoForm';
import DatosPrincipaleVehiculo from './src/screens/DatosPrincipaleVehiculo';
import DetallesVehiculo from './src/screens/DatallesVehiculo';
import Resumen from './src/screens/ResumenVehiculo';

export default function App() {
  const { vehiculo, step, updateField, nextStep, prevStep, registrarVehiculo } = useVehiculoForm();

  const renderScreen = () => {
    if (step === 0) {
      return (
        <DatosPrincipaleVehiculo
          vehiculo={vehiculo}
          onChange={updateField}
          onNext={nextStep}
        />
      );
    }
    if (step === 1) {
      return (
        <DetallesVehiculo
          vehiculo={vehiculo}
          onChange={updateField}
          onNext={nextStep}
          onBack={prevStep}
        />
      ); 
    }

    if (step === 2) {
      return (
        <Resumen
          vehiculo={vehiculo}
          onRegistrar={registrarVehiculo}
          onBack={prevStep}
        />
      );
      
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.title}>Registro de un vehículo</Text>
        <Text style={styles.subtitle}>
          Paso {step + 1} de {TOTAL_STEPS}
        </Text>

        <View style={styles.card}>
          {renderScreen()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
});
