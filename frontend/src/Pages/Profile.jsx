import React, { useEffect, useState } from 'react';
import Service from '../utils/http'
import { Avatar, Text } from '@mantine/core';

const service = new Service();

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  async function getpofileData(){
    let data = await service.get('user/me');
    setProfileData(data);
    console.log(data);
  };

  useEffect(() => {
      getpofileData();
  }, []);

  return (
    <div>
      <Avatar src={profileData?.avatar} alt ="it's me" />
      <Text tt="Uppercase"> {profileData?.email}</Text>
      <Text tt="captialize"> {profileData?.name}</Text>
    </div>
  )
}
