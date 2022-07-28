import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image
  } from '@chakra-ui/react'



export default function Navbar() {
    return (
    <Breadcrumb spacing='20px' separator=''>
        <BreadcrumbItem>
            <Image
                borderRadius='full'
                boxSize='40px'
                src='/favicon.png'
                alt='JK'
                align="bottom"
            />
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
    )
}
