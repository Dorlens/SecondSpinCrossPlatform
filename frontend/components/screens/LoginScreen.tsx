import React, { useState } from "react";
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
  useColorScheme,
  Animated,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import authServices from '../../api/client';
import { RootStackParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from "../../constants/theme";
import { useSpinAnimation } from "../../hooks/useSpinAnimation";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;


export function LoginScreen({ navigation }: Props) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  // const styles = getStyles(isDark);
  const { spin } = useSpinAnimation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [error, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    
    interface LoginError {
      detail?: string;
      message?: string;
    }
    const handleSubmit = async () => {
      if(!email || !password) {
        setErrors("Please enter your email and password");
        return;
      }
      setLoading(true);
      try{
          await authServices.login(email, password);
          navigation.navigate("Home");
      }catch(err){
        console.error("Login error", err);
        
        const errorResponse = err as LoginError;
        if(errorResponse.detail){
          setErrors(errorResponse.detail);
        }else{
          setErrors("Login failed");
        }
      }finally{
        setLoading(false);
      }
    }
    const styles = getStyles(isDark);
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Close login page"
        >
          <Ionicons
            name="close"
            size={24}
            color={isDark ? "#9ca3af" : "#616f89"}
          />
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          {/* Logo and Brand */}
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
              </Animated.View>
              <Text style={styles.brandText}>SECONDSPIN</Text>
            </View>
          </View>

          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Log in to your SecondSpin account
            </Text>
          </View>

          {/* Error Message */}
          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          {/* Form */}
          <View style={styles.formContainer}>
            <Text>Email Input</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={isDark ? "#6b7280" : "#616f89"}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                editable={!loading}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  placeholderTextColor={isDark ? "#6b7280" : "#616f89"}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoComplete="password"
                  editable={!loading}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                  accessibilityLabel="Toggle password visibility"
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color={isDark ? "#9ca3af" : "#616f89"}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              disabled={loading}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity> 

            {/* Login Button */}
             <TouchableOpacity
              style={[styles.loginButton, loading && styles.loginButtonDisabled]}
              onPress={handleSubmit}
              disabled={loading}
            >
               {loading ? ( 
                 <View style={styles.loadingContainer}>
                  <ActivityIndicator color="#000" size="small" />
                  <Text style={styles.loginButtonText}>Logging in...</Text>
                </View> 
               ) : ( 
                <Text style={styles.loginButtonText}>Log In</Text>
               )} 
            </TouchableOpacity> 
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const getStyles = (isDark : boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#111318" : "#f8f9fa",
    },
    scrollContainer: {
      flexGrow: 1,
      paddingHorizontal: 16,
      paddingTop: Platform.OS === "ios" ? 60 : 40,
      paddingBottom: 24,
    },
    closeButton: {
      position: "absolute",
      top: Platform.OS === "ios" ? 50 : 30,
      left: 16,
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: isDark ? "rgba(0, 0, 0, 0.2)" : "#e5e7eb",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    },
    contentContainer: {
      flex: 1,
      maxWidth: 448,
      width: "100%",
      alignSelf: "center",
      paddingTop: 40,
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: 24,
    },
    logoWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    logoIcon: {
      width: 24,
      height: 24,
    },
    brandText: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDark ? "#fff" : "#111318",
      letterSpacing: -0.3,
    },
    headerContainer: {
      alignItems: "center",
      marginBottom: 24,
    },
    title: {
      fontSize: 36,
      fontWeight: "900",
      color: isDark ? "#fff" : "#111318",
      letterSpacing: -1.2,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: isDark ? "#9ca3af" : "#616f89",
      textAlign: "center",
    },
    errorContainer: {
      width: "100%",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: isDark ? "rgba(220, 38, 38, 0.2)" : "#fef2f2",
      borderWidth: 1,
      borderColor: isDark ? "#991b1b" : "#fca5a5",
      borderRadius: 8,
      marginBottom: 16,
    },
    errorText: {
      fontSize: 14,
      color: isDark ? "#fca5a5" : "#dc2626",
    },
    formContainer: {
      width: "100%",
      gap: 16,
    },
    inputGroup: {
      gap: 8,
    },
    label: {
      fontSize: 16,
      fontWeight: "500",
      color: isDark ? "#e5e7eb" : "#111318",
    },
    input: {
      width: "100%",
      height: 56,
      borderWidth: 1,
      borderColor: isDark ? "#374151" : "#dbdfe6",
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 16,
      backgroundColor: isDark ? "#1f2937" : "#fff",
      color: isDark ? "#fff" : "#111318",
    },
    passwordContainer: {
      position: "relative",
      width: "100%",
    },
    passwordInput: {
      width: "100%",
      height: 56,
      borderWidth: 1,
      borderColor: isDark ? "#374151" : "#dbdfe6",
      borderRadius: 8,
      paddingHorizontal: 15,
      paddingRight: 50,
      fontSize: 16,
      backgroundColor: isDark ? "#1f2937" : "#fff",
      color: isDark ? "#fff" : "#111318",
    },
    eyeButton: {
      position: "absolute",
      right: 12,
      top: 0,
      bottom: 0,
      justifyContent: "center",
      padding: 8,
    },
    forgotPasswordContainer: {
      alignSelf: "flex-end",
    },
    forgotPasswordText: {
      fontSize: 14,
      fontWeight: "500",
      color: "#2563eb",
      textDecorationLine: "underline",
      
    },
    loginButton: {
      width: "100%",
      height: 56,
      color: "#000",
      backgroundColor: '#3b82f6',
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 8,
    },
    loginButtonDisabled: {
      opacity: 0.5,
    },
    loginButtonText: {
      fontSize: 18,
      fontWeight: "600",
      color: "#000",
    },
    loadingContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    signupContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 24,
    },
    signupText: {
      fontSize: 16,
      color: isDark ? "#9ca3af" : "#616f89",
    },
    signupLink: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#3b82f6",
      textDecorationLine: "underline",
    },
  });
export default LoginScreen;