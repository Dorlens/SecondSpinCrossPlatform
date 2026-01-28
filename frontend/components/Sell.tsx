import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Animated,
  Easing,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function Sell() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [selectedCondition, setSelectedCondition] = useState('New with Tags');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#111318' : '#F5F5F5',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: isDark ? '#1a1a1a' : '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#2a2a2a' : '#E5E7EB',
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    logo: {
      width: 24,
      height: 24,
    },
    logoText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDark ? '#FFFFFF' : '#111318',
    },
    cancelButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: isDark ? '#2a2a2a' : '#F3F4F6',
      borderRadius: 8,
    },
    cancelButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#111318',
    },
    scrollContent: {
      flexGrow: 1,
    },
    content: {
      backgroundColor: isDark ? '#1a1a1a' : '#FFFFFF',
      marginHorizontal: 16,
      marginVertical: 12,
      borderRadius: 12,
      overflow: 'hidden',
    },
    headerSection: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#2a2a2a' : '#E5E7EB',
    },
    title: {
      fontSize: 28,
      fontWeight: '900',
      color: isDark ? '#FFFFFF' : '#111318',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: isDark ? '#9CA3AF' : '#6B7280',
    },
    formSection: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: isDark ? '#FFFFFF' : '#111318',
      marginBottom: 4,
    },
    sectionSubtitle: {
      fontSize: 13,
      color: isDark ? '#9CA3AF' : '#6B7280',
      marginBottom: 12,
    },
    uploadBox: {
      borderWidth: 2,
      borderStyle: 'dashed',
      borderColor: isDark ? '#4B5563' : '#D1D5DB',
      borderRadius: 8,
      padding: 40,
      alignItems: 'center',
      gap: 16,
    },
    uploadTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: isDark ? '#FFFFFF' : '#111318',
      textAlign: 'center',
    },
    uploadSubtitle: {
      fontSize: 13,
      color: isDark ? '#D1D5DB' : '#4B5563',
      textAlign: 'center',
    },
    selectButton: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: isDark ? '#2a2a2a' : '#F3F4F6',
      borderRadius: 8,
    },
    selectButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#111318',
    },
    detailsSection: {
      marginTop: 24,
      gap: 16,
    },
    inputContainer: {
      gap: 6,
    },
    label: {
      fontSize: 13,
      fontWeight: '500',
      color: isDark ? '#D1D5DB' : '#374151',
    },
    input: {
      borderWidth: 1,
      borderColor: isDark ? '#4B5563' : '#D1D5DB',
      backgroundColor: isDark ? '#2a2a2a' : '#FFFFFF',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 14,
      color: isDark ? '#FFFFFF' : '#111318',
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top',
    },
    row: {
      flexDirection: 'row',
      gap: 12,
    },
    flex1: {
      flex: 1,
    },
    conditionButtons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 8,
    },
    conditionButton: {
      flex: 1,
      minWidth: '45%',
      paddingVertical: 10,
      paddingHorizontal: 8,
      borderRadius: 8,
      borderWidth: 1,
      alignItems: 'center',
    },
    conditionButtonSelected: {
      borderColor: '#104bb9',
    },
    conditionButtonUnselected: {
      backgroundColor: 'transparent',
      borderColor: isDark ? '#4B5563' : '#D1D5DB',
    },
    conditionButtonTextSelected: {
      fontSize: 13,
      fontWeight: '600',
      
    },
    conditionButtonTextUnselected: {
      fontSize: 13,
      fontWeight: '600',
      color: isDark ? '#D1D5DB' : '#374151',
    },
    priceSection: {
      marginTop: 24,
    },
    priceInputContainer: {
      position: 'relative',
    },
    dollarSign: {
      position: 'absolute',
      left: 12,
      top: 11,
      fontSize: 14,
      color: isDark ? '#9CA3AF' : '#6B7280',
      zIndex: 1,
    },
    priceInput: {
      paddingLeft: 28,
    },
    helperText: {
      fontSize: 11,
      color: isDark ? '#9CA3AF' : '#6B7280',
      marginTop: 4,
    },
    footer: {
      backgroundColor: isDark ? '#1a1a1a' : '#FFFFFF',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: isDark ? '#2a2a2a' : '#E5E7EB',
    },
    listButton: {
     backgroundColor: '#f0f2f4',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    listButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
    },
  });

  const conditions = ['New with Tags', 'Like New', 'Gently Used', 'Used'];


const spinLogo = useRef(new Animated.Value(0)).current;
useEffect(() => {
  Animated.loop(
    Animated.timing(spinLogo, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
}, [spinLogo]);

const spin = spinLogo.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Animated.View style={{transform: [{rotate: spin}]}}>
            <MaterialIcons name="cached" size={24} color="#000000ff" />
            </Animated.View>
          <Text style={styles.logoText}>SECONDSPIN</Text>
        </View>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContent}>
        <View style={styles.content}>
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.title}>Sell Your Item</Text>
            <Text style={styles.subtitle}>Add photos and details to list your item.</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Photos */}
            <View>
              <Text style={styles.sectionTitle}>Photos</Text>
              <Text style={styles.sectionSubtitle}>Add up to 8 photos. The first is your cover.</Text>
              <View style={styles.uploadBox}>
                <View>
                  <Text style={styles.uploadTitle}>Upload Photos</Text>
                  <Text style={styles.uploadSubtitle}>Tap to select photos from your gallery.</Text>
                </View>
                <TouchableOpacity style={styles.selectButton}>
                  <Text style={styles.selectButtonText}>Select Photos</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Details */}
            <View style={styles.detailsSection}>
              <Text style={styles.sectionTitle}>Details</Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Vintage Levi's 501 Jeans"
                  placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Add details like material, measurements, and any flaws."
                  placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                  multiline
                  numberOfLines={4}
                />
              </View>

              <View style={styles.row}>
                <View style={[styles.inputContainer, styles.flex1]}>
                  <Text style={styles.label}>Category</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Bottoms"
                    placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                  />
                </View>

                <View style={[styles.inputContainer, styles.flex1]}>
                  <Text style={styles.label}>Size</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Medium"
                    placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Brand</Text>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Levi's"
                  placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Condition</Text>
                <View style={styles.conditionButtons}>
                  {conditions.map((condition) => (
                    <TouchableOpacity
                      key={condition}
                      style={[
                        styles.conditionButton,
                        selectedCondition === condition
                          ? styles.conditionButtonSelected
                          : styles.conditionButtonUnselected,
                      ]}
                      onPress={() => setSelectedCondition(condition)}
                    >
                      <Text
                        style={
                          selectedCondition === condition
                            ? styles.conditionButtonTextSelected
                            : styles.conditionButtonTextUnselected
                        }
                      >
                        {condition}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            {/* Pricing */}
            <View style={styles.priceSection}>
              <Text style={styles.sectionTitle}>Pricing</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Price</Text>
                <View style={styles.priceInputContainer}>
                  <Text style={styles.dollarSign}>$</Text>
                  <TextInput
                    style={[styles.input, styles.priceInput]}
                    placeholder="0.00"
                    placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                    keyboardType="decimal-pad"
                  />
                </View>
                <Text style={styles.helperText}>
                  Shipping costs and platform fees will be calculated at checkout.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.listButtonText}>List Item</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Sell;