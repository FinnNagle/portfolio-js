import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbAshserv from '../public/images/works/ashserv_eyecatch.png'

const Works = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ashserv" title="Ashserv" thumbnail={thumbAshserv}>
            A multipurpose personal server.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ashserv" title="Ashserv" thumbnail={thumbAshserv}>
            A multipurpose personal server.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem id="ashserv" title="Ashserv" thumbnail={thumbAshserv}>
            A multipurpose personal server.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="ashserv" title="Ashserv" thumbnail={thumbAshserv}>
            A multipurpose personal server.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
    </Layout>
  )
}

export default Works