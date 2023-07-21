import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'


export const WorkGridItem = ({ children, id, title }) => (
    <Box>
      <LinkBox
        as={NextLink}
        href={`/w9rks/${id}`}
        scroll={false}
        cursor="pointer"
      >
        <LinkOverlay as="div" href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )