import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  useColorScheme,
  Animated,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSpinAnimation } from '../../hooks/useSpinAnimation';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants/theme';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Sell'>;

const CONDITIONS = ['New with Tags', 'Like New', 'Gently Used', 'Used'];

export function SellScreen({ navigation }: Props) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [selectedCondition, setSelectedCondition] = useState('New with Tags');
  const { spin } = useSpinAnimation();

  // Dynamic styles that depend on isDark - only computed when isDark changes
  const dynamicStyles = useMemo(
    () => ({
      container: {
        backgroundColor: isDark ? COLORS.dark.background : COLORS.background.secondary,
      },
      header: {
        backgroundColor: isDark ? COLORS.dark.surface : COLORS.background.primary,
        borderBottomColor: isDark ? COLORS.dark.border : COLORS.border.medium,
      },
      logoText: {
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      cancelButton: {
        backgroundColor: isDark ? COLORS.dark.border : '#F3F4F6',
      },
      cancelButtonText: {
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      content: {
        backgroundColor: isDark ? COLORS.dark.surface : COLORS.background.primary,
      },
      headerSection: {
        borderBottomColor: isDark ? COLORS.dark.border : COLORS.border.medium,
      },
      title: {
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      subtitle: {
        color: isDark ? COLORS.dark.textMuted : '#6B7280',
      },
      sectionTitle: {
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      sectionSubtitle: {
        color: isDark ? COLORS.dark.textMuted : '#6B7280',
      },
      uploadBox: {
        borderColor: isDark ? COLORS.dark.inputBorder : '#D1D5DB',
      },
      uploadTitle: {
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      uploadSubtitle: {
        color: isDark ? '#D1D5DB' : '#4B5563',
      },
      selectButton: {
        backgroundColor: isDark ? COLORS.dark.border : '#F3F4F6',
      },
      selectButtonText: {
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      label: {
        color: isDark ? '#D1D5DB' : '#374151',
      },
      input: {
        borderColor: isDark ? COLORS.dark.inputBorder : '#D1D5DB',
        backgroundColor: isDark ? COLORS.dark.border : COLORS.background.primary,
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      conditionButtonUnselected: {
        borderColor: isDark ? COLORS.dark.inputBorder : '#D1D5DB',
      },
      conditionButtonTextUnselected: {
        color: isDark ? '#D1D5DB' : '#374151',
      },
      conditionButtonTextSelected: {
        color: isDark ? COLORS.dark.text : COLORS.text.primary,
      },
      dollarSign: {
        color: isDark ? COLORS.dark.textMuted : '#6B7280',
      },
      helperText: {
        color: isDark ? COLORS.dark.textMuted : '#6B7280',
      },
      footer: {
        backgroundColor: isDark ? COLORS.dark.surface : COLORS.background.primary,
        borderTopColor: isDark ? COLORS.dark.border : COLORS.border.medium,
      },
    }),
    [isDark]
  );

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]} edges={['top', 'bottom']}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header */}
      <View style={[styles.header, dynamicStyles.header]}>
        <View style={styles.headerLeft}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <MaterialIcons
              name="cached"
              size={24}
              color={isDark ? COLORS.dark.text : COLORS.text.primary}
            />
          </Animated.View>
          <Text style={[styles.logoText, dynamicStyles.logoText]}>SECONDSPIN</Text>
        </View>
        <TouchableOpacity
          style={[styles.cancelButton, dynamicStyles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.cancelButtonText, dynamicStyles.cancelButtonText]}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContent}>
        <View style={[styles.content, dynamicStyles.content]}>
          {/* Header Section */}
          <View style={[styles.headerSection, dynamicStyles.headerSection]}>
            <Text style={[styles.title, dynamicStyles.title]}>Sell Your Item</Text>
            <Text style={[styles.subtitle, dynamicStyles.subtitle]}>
              Add photos and details to list your item.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            {/* Photos */}
            <View>
              <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Photos</Text>
              <Text style={[styles.sectionSubtitle, dynamicStyles.sectionSubtitle]}>
                Add up to 8 photos. The first is your cover.
              </Text>
              <View style={[styles.uploadBox, dynamicStyles.uploadBox]}>
                <View>
                  <Text style={[styles.uploadTitle, dynamicStyles.uploadTitle]}>
                    Upload Photos
                  </Text>
                  <Text style={[styles.uploadSubtitle, dynamicStyles.uploadSubtitle]}>
                    Tap to select photos from your gallery.
                  </Text>
                </View>
                <TouchableOpacity style={[styles.selectButton, dynamicStyles.selectButton]}>
                  <Text style={[styles.selectButtonText, dynamicStyles.selectButtonText]}>
                    Select Photos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Details */}
            <View style={styles.detailsSection}>
              <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Details</Text>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>Title</Text>
                <TextInput
                  style={[styles.input, dynamicStyles.input]}
                  placeholder="e.g. Vintage Levi's 501 Jeans"
                  placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>Description</Text>
                <TextInput
                  style={[styles.input, styles.textArea, dynamicStyles.input]}
                  placeholder="Add details like material, measurements, and any flaws."
                  placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                  multiline
                  numberOfLines={4}
                />
              </View>

              <View style={styles.row}>
                <View style={[styles.inputContainer, styles.flex1]}>
                  <Text style={[styles.label, dynamicStyles.label]}>Category</Text>
                  <TextInput
                    style={[styles.input, dynamicStyles.input]}
                    placeholder="Bottoms"
                    placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                  />
                </View>

                <View style={[styles.inputContainer, styles.flex1]}>
                  <Text style={[styles.label, dynamicStyles.label]}>Size</Text>
                  <TextInput
                    style={[styles.input, dynamicStyles.input]}
                    placeholder="Medium"
                    placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>Brand</Text>
                <TextInput
                  style={[styles.input, dynamicStyles.input]}
                  placeholder="e.g. Levi's"
                  placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>Condition</Text>
                <View style={styles.conditionButtons}>
                  {CONDITIONS.map((condition) => (
                    <TouchableOpacity
                      key={condition}
                      style={[
                        styles.conditionButton,
                        selectedCondition === condition
                          ? styles.conditionButtonSelected
                          : [
                              styles.conditionButtonUnselected,
                              dynamicStyles.conditionButtonUnselected,
                            ],
                      ]}
                      onPress={() => setSelectedCondition(condition)}
                    >
                      <Text
                        style={
                          selectedCondition === condition
                            ? [
                                styles.conditionButtonTextSelected,
                                dynamicStyles.conditionButtonTextSelected,
                              ]
                            : [
                                styles.conditionButtonTextUnselected,
                                dynamicStyles.conditionButtonTextUnselected,
                              ]
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
              <Text style={[styles.sectionTitle, dynamicStyles.sectionTitle]}>Pricing</Text>
              <View style={styles.inputContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>Price</Text>
                <View style={styles.priceInputContainer}>
                  <Text style={[styles.dollarSign, dynamicStyles.dollarSign]}>$</Text>
                  <TextInput
                    style={[styles.input, styles.priceInput, dynamicStyles.input]}
                    placeholder="0.00"
                    placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
                    keyboardType="decimal-pad"
                  />
                </View>
                <Text style={[styles.helperText, dynamicStyles.helperText]}>
                  Shipping costs and platform fees will be calculated at checkout.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={[styles.footer, dynamicStyles.footer]}>
        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.listButtonText}>List Item</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Static styles - created once at module load
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  logoText: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
  },
  cancelButtonText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
  },
  headerSection: {
    padding: SPACING.lg,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: FONT_SIZES.hero,
    fontWeight: '900',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
  },
  formSection: {
    padding: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  sectionSubtitle: {
    fontSize: 13,
    marginBottom: SPACING.md,
  },
  uploadBox: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: BORDER_RADIUS.sm,
    padding: SPACING.xxxl,
    alignItems: 'center',
    gap: SPACING.lg,
  },
  uploadTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  uploadSubtitle: {
    fontSize: 13,
    textAlign: 'center',
  },
  selectButton: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10,
    borderRadius: BORDER_RADIUS.sm,
  },
  selectButtonText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
  },
  detailsSection: {
    marginTop: SPACING.xl,
    gap: SPACING.lg,
  },
  inputContainer: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
    fontSize: FONT_SIZES.md,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  flex1: {
    flex: 1,
  },
  conditionButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    marginTop: SPACING.sm,
  },
  conditionButton: {
    flex: 1,
    minWidth: '45%',
    paddingVertical: 10,
    paddingHorizontal: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    alignItems: 'center',
  },
  conditionButtonSelected: {
    borderColor: '#104bb9',
    backgroundColor: 'rgba(16, 75, 185, 0.1)',
  },
  conditionButtonUnselected: {
    backgroundColor: 'transparent',
  },
  conditionButtonTextSelected: {
    fontSize: 13,
    fontWeight: '600',
  },
  conditionButtonTextUnselected: {
    fontSize: 13,
    fontWeight: '600',
  },
  priceSection: {
    marginTop: SPACING.xl,
  },
  priceInputContainer: {
    position: 'relative',
  },
  dollarSign: {
    position: 'absolute',
    left: SPACING.md,
    top: 11,
    fontSize: FONT_SIZES.md,
    zIndex: 1,
  },
  priceInput: {
    paddingLeft: 28,
  },
  helperText: {
    fontSize: FONT_SIZES.xs,
    marginTop: SPACING.xs,
  },
  footer: {
    padding: SPACING.lg,
    borderTopWidth: 1,
  },
  listButton: {
    backgroundColor: COLORS.background.tertiary,
    paddingVertical: SPACING.md + 2,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
  },
  listButtonText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
});
