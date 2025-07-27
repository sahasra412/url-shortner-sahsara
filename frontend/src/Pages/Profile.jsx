import React, { useEffect, useState } from 'react';
import Service from '../utils/http';
import { Center, Stack, Avatar, Text } from '@mantine/core'; 

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
      <Stack  h={300} align="center" justify="center" gap="xs" bg="var(--mantine-color-body)">
        <Avatar alt="it's me" size="xl" radius="xl"   color="cyan" src="avatar.png"   />
        <Text ta="center"> <strong>NAME:</strong>{profileData?.name}</Text>
        <Text ta="center"><strong>EMAIL: </strong>{profileData?.email}</Text>
        <Text ta="center"><strong>ID:</strong>{profileData?._id}</Text>
      </Stack>
    </Center>
  );
}
