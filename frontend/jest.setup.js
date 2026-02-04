import '@testing-library/jest-native/extend-expect';

require('@testing-library/jest-native/extend-expect');

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');
  
  const createIconMock = (name) => {
    return (props) => React.createElement(Text, props, name);
  };

  return {
    Ionicons: createIconMock('Ionicons'),
    MaterialIcons: createIconMock('MaterialIcons'),
    FontAwesome: createIconMock('FontAwesome'),
    FontAwesome5: createIconMock('FontAwesome5'),
    AntDesign: createIconMock('AntDesign'),
    Entypo: createIconMock('Entypo'),
    EvilIcons: createIconMock('EvilIcons'),
    Feather: createIconMock('Feather'),
    Foundation: createIconMock('Foundation'),
    MaterialCommunityIcons: createIconMock('MaterialCommunityIcons'),
    Octicons: createIconMock('Octicons'),
    SimpleLineIcons: createIconMock('SimpleLineIcons'),
    Zocial: createIconMock('Zocial'),
  };
});

require('@testing-library/jest-native/extend-expect');

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(() => Promise.resolve(null)),
    setItem: jest.fn(() => Promise.resolve()),
    removeItem: jest.fn(() => Promise.resolve()),
    clear: jest.fn(() => Promise.resolve()),
    getAllKeys: jest.fn(() => Promise.resolve([])),
    multiGet: jest.fn(() => Promise.resolve([])),
    multiSet: jest.fn(() => Promise.resolve()),
    multiRemove: jest.fn(() => Promise.resolve()),
  },
}));

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');
  
  const createIconMock = (name) => {
    return (props) => React.createElement(Text, props, name);
  };

  return {
    Ionicons: createIconMock('Ionicons'),
    MaterialIcons: createIconMock('MaterialIcons'),
    FontAwesome: createIconMock('FontAwesome'),
    FontAwesome5: createIconMock('FontAwesome5'),
    AntDesign: createIconMock('AntDesign'),
    Entypo: createIconMock('Entypo'),
    EvilIcons: createIconMock('EvilIcons'),
    Feather: createIconMock('Feather'),
    Foundation: createIconMock('Foundation'),
    MaterialCommunityIcons: createIconMock('MaterialCommunityIcons'),
    Octicons: createIconMock('Octicons'),
    SimpleLineIcons: createIconMock('SimpleLineIcons'),
    Zocial: createIconMock('Zocial'),
  };
});
