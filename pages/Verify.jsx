import React from 'react'
import verifyEmaiStyles from '../styles/action/verifyEmail.module.css'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon'
import {useRouter} from 'next/router'

export default function Verify() {
	const router =useRouter()
	return(
		<div className={verifyEmaiStyles.fullScreen}>
			<div className={verifyEmaiStyles.logoContainer}>
				webGramming
			</div>
			<div className={verifyEmaiStyles.container}>
				<strong className={verifyEmaiStyles.containerTitle}>
					Account Activated
				</strong>
				<Icon sx={{width:'15vw',height:'10vh',fontSize:30}}>
					<MarkEmailReadIcon sx={{width:'15vw',height:'10vh',fontSize:30,color:'#00AFFE'}} />
				</Icon>
				<div className={verifyEmaiStyles.containerMessage}>
					<strong className={verifyEmaiStyles.hey}>Hey,</strong >
					<p className={verifyEmaiStyles.verificationMessage}>
						Thank You, your email has been verified.Your account is now active.
						Please use the link below to login your account.
					</p>
				</div>
				<Button onClick={() => router.push('auth/login')} variant="contained" sx={{background:'#00AFFE',marginBottom:'3vh'}}>Login to your Account</Button>
				<p className={verifyEmaiStyles.verificationMessage}>
					Thank You for Choosing Us.
				</p>
			</div>

		</div>
	)
}