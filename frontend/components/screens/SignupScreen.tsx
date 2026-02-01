import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  SafeAreaView,
  Animated,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import authServices from '../../api/client';
import { useSpinAnimation } from '../../hooks/useSpinAnimation';
import Icon from '@expo/vector-icons/MaterialIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { COLORS } from '../../constants/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

  export function SignupScreen({ navigation }: Props) {
    const { spin } = useSpinAnimation();
    

    const[fullName, setFullName] = useState('');
    const[email, setEmail] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[password2, setPassword2] = useState('');
    const[showPassword, setShowPassword] = useState(false);
    const[showPassword2, setShowPassword2] = useState(false);

    const [error, setErrors] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
               if (!fullName.trim()) {
                setErrors('Full Name is required.');
                return;
              }
              if (!email.trim()) {
                setErrors('Email is required.');
                return;
              }
              if (!username.trim()) {
                setErrors('Username is required.');
                return;
              }
              if (password !== password2) {
                setErrors('Passwords do not match.');
                return;
              }
              if (password.length < 8) {
                setErrors('Password must be at least 8 characters long.');
                return;
              }
              setLoading(true);
              setErrors('');
              try{
                const nameParts = fullName.trim().split(' ');
                const first_name = nameParts[0];
                const last_name = nameParts.slice(1).join(' ') || nameParts[0];
                     await authServices.register({
                      first_name,
                      last_name,
                      email,
                      username,
                      password,
                      password2,
                    });
                        navigation.navigate("Login");
                    }catch(err: any){
                      console.error("Signup error", err);
                      if(err.detail){
                        setErrors(err.detail);
                      }else{
                        setErrors("Signup failed");
                      }
                    } finally {
                      setLoading(false);
                    }
    };
    return (
            <SafeAreaView style={styles.safeArea}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
              >
                <ScrollView
                  contentContainerStyle={styles.scrollContent}
                  keyboardShouldPersistTaps="handled"
                >
                  {/* Close Button */}
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => navigation.goBack()}
                    accessibilityLabel="Close signup page"
                  >
                    <Icon name="close" size={24} color="#616f89" />
                  </TouchableOpacity>

                  {/* Header */}
                  <View style={styles.header}>
                    <View style={styles.logoContainer}>
                      <Animated.View style={{ transform: [{ rotate: spin }] }}>
                          <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
                      </Animated.View>
                      <Text style={styles.logoText}>SECONDSPIN</Text>
                    </View>
                  </View>

                  {/* Main Content */}
                  <View style={styles.main}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>Create Your Account</Text>
                      <Text style={styles.subtitle}>Join our community of fashion lovers.</Text>
                    </View>

                    {/* Error Message */}
                    {error ? (
                      <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error}</Text>
                      </View>
                    ) : null}

                    {/* Form */}
                    <View style={styles.form}>
                      {/* Full Name */}
                      <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <View style={styles.inputContainer}>
                          <Icon name="person" size={24} color="#616f89" style={styles.inputIcon} />
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            placeholderTextColor="#616f89"
                            value={fullName}
                            onChangeText={setFullName}
                            editable={!loading}
                            autoCapitalize="words"
                          />
                        </View>
                      </View>

                      {/* Username */}
                      <View style={styles.inputGroup}>
                        <Text style={styles.label}>Username</Text>
                        <View style={styles.inputContainer}>
                          <Icon name="account-circle" size={24} color="#616f89" style={styles.inputIcon} />
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your username"
                            placeholderTextColor="#616f89"
                            value={username}
                            onChangeText={setUsername}
                            editable={!loading}
                            autoCapitalize="none"
                            autoCorrect={false}
                          />
                        </View>
                      </View>

                      {/* Email */}
                      <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputContainer}>
                          <Icon name="mail" size={24} color="#616f89" style={styles.inputIcon} />
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#616f89"
                            value={email}
                            onChangeText={setEmail}
                            editable={!loading}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                          />
                        </View>
                      </View>

                      {/* Password */}
                      <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputContainer}>
                          <Icon name="lock" size={24} color="#616f89" style={styles.inputIcon} />
                          <TextInput
                            style={[styles.input, styles.passwordInput]}
                            placeholder="8+ characters"
                            placeholderTextColor="#616f89"
                            value={password}
                            onChangeText={setPassword}
                            editable={!loading}
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                          />
                          <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.visibilityButton}
                            accessibilityLabel="Toggle password visibility"
                          >
                            <Icon
                              name={showPassword ? 'visibility' : 'visibility-off'}
                              size={24}
                              color="#616f89"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                      {/* Confirm Password */}
                      <View style={styles.inputGroup}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.inputContainer}>
                          <Icon name="lock" size={24} color="#616f89" style={styles.inputIcon} />
                          <TextInput
                            style={[styles.input, styles.passwordInput]}
                            placeholder="Re-enter your password"
                            placeholderTextColor="#616f89"
                            value={password2}
                            onChangeText={setPassword2}
                            editable={!loading}
                            secureTextEntry={!showPassword2}
                            autoCapitalize="none"
                            autoCorrect={false}
                          />
                          <TouchableOpacity
                            onPress={() => setShowPassword2(!showPassword2)}
                            style={styles.visibilityButton}
                            accessibilityLabel="Toggle confirm password visibility"
                          >
                            <Icon
                              name={showPassword2 ? 'visibility' : 'visibility-off'}
                              size={24}
                              color="#616f89"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                      {/* Submit Button */}
                      <TouchableOpacity
                        style={[styles.submitButton, loading && styles.submitButtonDisabled]}
                        onPress={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? (
                          <View style={styles.loadingContainer}>
                            <ActivityIndicator color="#000" />
                            <Text style={styles.loadingText}>Creating Account...</Text>
                          </View>
                        ) : (
                          <Text style={styles.submitButtonText}>Create Account</Text>
                          
                        )}
                      </TouchableOpacity>
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>
                        Already have an account?{' '}
                        <Text
                          style={styles.footerLink}
                          onPress={() => navigation.navigate('Login')}
                        >
                          Log in
                        </Text>
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </SafeAreaView>
          );
        }

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  closeButton: {
    position: 'absolute',
    top:1,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f2f4',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f2f4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  logoIcon: {
    transform: [{ rotate: '0deg' }],
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111318',
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    maxWidth: 448,
    width: '100%',
    alignSelf: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#111318',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  errorContainer: {
    backgroundColor: '#fef2f2',
    borderWidth: 1,
    borderColor: '#fecaca',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    color: '#dc2626',
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111318',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dbdfe6',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 56,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111318',
  },
  passwordInput: {
    paddingRight: 8,
  },
  visibilityButton: {
    padding: 4,
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  submitButtonDisabled: {
    backgroundColor: '#93c5fd',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#616f89',
  },
  footerLink: {
    fontWeight: '500',
    color: '#3b82f6',
    textDecorationLine: 'underline',
  },
});