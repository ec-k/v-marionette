import React from 'react'
import { Stack, Button } from '@mui/material'
import { networkSettings } from 'stores/settings'
import VM_TextField from 'components/leftwindow/VM_TextField'

const NetworkSettingWindow: React.FC = () => {
  const userNameInputRef = React.useRef<HTMLInputElement | null>(null)
  const hostInputRef = React.useRef<HTMLInputElement | null>(null)
  const portInputRef = React.useRef<HTMLInputElement | null>(null)
  const updateRateInputRef = React.useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    const port = Number(portInputRef.current?.value)
    const updateRate = Number(updateRateInputRef.current?.value)

    networkSettings.neosUserName = String(userNameInputRef.current?.value)
    networkSettings.host = String(hostInputRef.current?.value)
    if (!Number.isNaN(port)) networkSettings.port = port
    if (!Number.isNaN(updateRate)) networkSettings.updateRate = updateRate

    console.log(networkSettings.neosUserName)
    console.log(networkSettings.host)
    console.log(networkSettings.port)
    console.log(networkSettings.updateRate)
  }

  return (
    <>
      <Stack spacing={2}>
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Update
        </Button>
        <VM_TextField
          label="User Name (NeosVR)"
          // adornment={{ position: 'start', value: 'U -' }}
          inputRef={userNameInputRef}
        />
        <VM_TextField
          label="host"
          defaultValue="localhost"
          adornment={{ position: 'start', value: 'ws://' }}
          inputRef={hostInputRef}
        />
        <VM_TextField
          label="port"
          defaultValue="3000"
          inputRef={portInputRef}
          inputProps={{ pattern: '^[0-9]+$' }}
        />
        <VM_TextField
          label="update rate"
          defaultValue="30"
          adornment={{ position: 'end', value: 'fps' }}
          inputRef={updateRateInputRef}
          inputProps={{ pattern: '^[0-9]+$' }}
        />
      </Stack>
    </>
  )
}

export default NetworkSettingWindow
