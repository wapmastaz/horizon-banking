'use client';

import React from 'react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const MobileNav = ({ user }: MobileNavProps) => {
	const pathName = usePathname();

	return (
		<section className='w-full max-w-[264px'>
			<Sheet>
				<SheetTrigger>
					{/* <Link
						href={'/'}
						className='mb-12 cursor-pointer flex items-center gap-2'
					> */}
					<Image
						src={'icons/hamburger.svg'}
						height={30}
						width={30}
						alt='Menu'
						className='cursor-pointer'
					/>
					<h1 className='sidebar-logo'>Horizon</h1>
					{/* </Link> */}
				</SheetTrigger>
				<SheetContent className='border-none bg-white'>
					<Link
						href={'/'}
						className='flex items-center cursor-pointer gap-1 px-4'
					>
						<Image
							src={'icons/logo.svg'}
							height={34}
							width={34}
							alt='Horizon Logo'
						/>
						<h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
							Horizon
						</h1>
					</Link>

					<div className='mobilenav-sheet'>
						<SheetClose asChild>
							<nav className='flex h-full flex-col gap-6b pt-16 text-white'>
								{sidebarLinks.map((link) => {
									const isActive =
										pathName === link.route ||
										pathName.startsWith(`${link.route}/`);

									return (
										<SheetClose
											asChild
											key={link.label}
										>
											<Link
												href={link.route}
												className={cn('mobilenav-sheet_close w-full', {
													'bg-bank-gradient': isActive,
												})}
											>
												<Image
													src={`${link.imgURL}`}
													alt={link.label}
													width={20}
													height={20}
													className={cn({
														'brightness-[13] invert-0': isActive,
													})}
												/>

												<p
													className={cn('text-16 font-semibold text-black-2', {
														'text-white': isActive,
													})}
												>
													{link.label}
												</p>
											</Link>
										</SheetClose>
									);
								})}
							</nav>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
