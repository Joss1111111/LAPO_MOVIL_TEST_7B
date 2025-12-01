import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useVehiculoForm, TOTAL_STEPS } from './src/state/useVehiculoForm';
import DatosPrincipaleVehiculo from './src/screens/DatosPrincipaleVehiculo';
import ResumenVehiculo from './src/screens/ResumenVehiculo';
import VehiculosRegistradosScreen from './src/screens/VehiculosRegistradosScreen';
import DetallesVehiculo from './src/screens/DatallesVehiculo';

export default function App() {
  const {
    vehiculo,
    step,
    vehiculosRegistrados,
    updateField,
    nextStep,
    prevStep,
    registrarVehiculo,
    resetForm,
  } = useVehiculoForm();

  const handleRegistrar = () => {
    registrarVehiculo(); // guarda en la lista
    nextStep();          // pasa al step 3 (pantalla final)
  };

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
        <ResumenVehiculo
          vehiculo={vehiculo}
          onBack={prevStep}
          onRegistrar={handleRegistrar}
        />
      );
    }

    // step === 3 -> pantalla final
    return (
      <VehiculosRegistradosScreen
        vehiculos={vehiculosRegistrados}
        onRegistrarOtro={resetForm}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.title}>Registro de un vehículo</Text>
        <Text style={styles.subtitle}>
          {step <= 2
            ? `Paso ${step + 1} de ${TOTAL_STEPS}`
            : 'Vehículos registrados'}
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
