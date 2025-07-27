import React, { useEffect, useState } from 'react';
import Service from '../utils/http';
import { Center, Stack, Avatar, Text } from '@mantine/core'; // ✅ Import Center & Stack

const service = new Service();

export default function Profile() {
  const [profileData, setProfileData] = useState(null);

  async function getpofileData() {
    const data = await service.get('user/me');
    setProfileData(data);
    console.log(data);
  }

  useEffect(() => {
    getpofileData();
  }, []);

  return (
    <Center style={{ height: '80vh' }}> 
      <Stack align="center" spacing="sm">
        <Avatar
          src={profileData?.avatar}
          alt="it's me"
          size="xl"
          radius="xs"
        />
        <Text ta="center">Name:{profileData?.name}</Text>
        <Text ta="center">Email:{profileData?.email}</Text>
        <Text ta="center">ID:{profileData?._id}</Text>
      </Stack>
    </Center>
  );
}
