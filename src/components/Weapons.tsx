import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import {Text} from "./Text/Text";

// interface WeaponInterface {
//     id?: number
//     name?: string
//     imageUrl?: string
//     cost?: number
//     killReward?: number
// }
// interface Weapon {
//     weapon: WeaponInterface
// }
const WeaponsContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px
`
const Weapon = styled('div')`
  border: 1px solid gray;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

`
const Image = styled('img')`
    width: 200px;
  height: 200px;
  object-fit: contain;
`
export const Weapons = () => {
    const [weapons, setWeapons] = useState([])
    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://api.pandascore.co/csgo/weapons',
            headers: {Accept: 'application/json', Authorization: '-r6c3jvc_pUeDywsxaJtrjdv3_lySjEbENMuVQZbGeZa0i_W63k'}
        };
        // VjrKEOi7e8jzoj-NKHrfUHxYhBsWYp8IDZRjdU0CopqXueIJ5iM
        axios.request(options).then(function (response) {
            setWeapons(response.data);
            console.error(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    return(
        <WeaponsContainer>
            {weapons.map((weapon:any)=>{
                return (
                    <Weapon key={weapon.id}>
                        <Text> Weapon name: {weapon.name}</Text>
                        <Text> Weapon cost: {weapon.cost}</Text>
                        <Text> Kill reward: {weapon.kill_reward}</Text>
                        <Text> Ammo: {weapon.ammo_clip_max}/{weapon.ammo_max}</Text>
                        <Image src={weapon.image_url} alt=''/>
                    </Weapon>
                )
            })}
        </WeaponsContainer>
    )
}