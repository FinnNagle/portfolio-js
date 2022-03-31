import NextLink from 'next/link'
import { 
  Button,
  Container, 
  Box, 
  Heading, 
  Image, 
  Link,
  useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection , BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg" 
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={3} 
          mb={6} 
          align="center"
        >
          Hello, I&apos;m a no-stack developer based in Wisconsin!
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading a="h2" variant="page-title">
              Connor Ashpole
            </Heading>
            <p>Creator ( Craftsman, Artist, Developer )</p>
          </Box>
          <Box 
            flexShrink={0} 
            mt={{ base: 4, md: 0 }} 
            ml={{ md: 6 }} 
            align="center">
              <Image 
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block" borderRadius="full"
                src="/images/profile.png"
                alt="Profile Image" />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Connor is a modern freelance craftsman with a passion for creating purposeful and elegant products. Most days you can find him woodworking, developing web apps, or improving his home server and automation. Connor is currently working on{' '}
            <NextLink href="/works/ashserv"><Link>Ashserv</Link></NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button 
                rightIcon={<ChevronRightIcon />} 
                colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" >
            Bio
          </Heading>
          <BioSection>
            <BioYear>1989</BioYear>
            Born in Milwaukee, WI.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            lorem ipsum dolor sit amet, consectetur adip.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            lorem ipsum dolor sit amet, consectetur adip.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            lorem ipsum dolor sit amet, consectetur adip.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            lorem ipsum dolor sit amet, consectetur adip.
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page