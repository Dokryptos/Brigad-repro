import { MissionItem } from '@/utils/types/MissionItem';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, Text, View, FlatList } from 'react-native';


export default function MissionScreen() {

  const [listMission, setListMission] = useState<MissionItem[]>([])
  useEffect(() => {
    async function fetchMissionFeed() {
      
    }
  })

  return (
    <View style={styles.titleContainer}>
        <Text style={styles.title}>Mission</Text>
        {/* <FlatList data={} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
      fontSize: 20,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
  });
  