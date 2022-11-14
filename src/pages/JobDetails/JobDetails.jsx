// react
import React from "react"
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

// chakra
import {Box, Button, Divider, Flex, Image, List, ListItem, Text, useBreakpointValue} from "@chakra-ui/react";

// common
import {EmptyBookmark, FullBookmark, GpsMarker, LeftArrow, Share} from "../../assets/icon/icons";
import {breakpointStyles, styles} from "./JobDetailsStyles";
import {Map} from "../../components/Map/Map";
import {breakpoints} from "../../style/breakpoints";

export const JobDetails = () => {
    const [bookmarkState, setBookmarkState ] = React.useState(false);
    const offer = useSelector(state => state.data.jobRecord);
    const navigate = useNavigate();

    const changeBookMark = () => {
        setBookmarkState(!bookmarkState)
    };

    const bookmark = bookmarkState ? <FullBookmark/> : <EmptyBookmark/>;

    const center = {lat: offer.location.lat, lng: offer.location.long};

    const breakpoint = useBreakpointValue(breakpoints) || breakpoints.sm;

    return(
          <Flex style={breakpointStyles[breakpoint].wrapper}>
              <Flex style={breakpointStyles[breakpoint].contentWrap} >
                  <Flex style={styles.mainContent}>
                      {breakpoint === breakpoints.lg ?
                        <>
                        <Flex style={styles.header}>
                            <Text style={styles.headerTitle}>Job Details</Text>
                            <Flex style={styles.headerLinksWrapper}>
                                <Flex onClick={changeBookMark} style={styles.headerLinkBlock}>
                                    {bookmark}
                                    <Text>Save to my list</Text>
                                </Flex>
                                <Flex style={styles.headerLinkBlock}>
                                    <Share/>
                                    <Text>Share</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Divider paddingTop="5px"/>
                        </>
                      :
                        <Box style={styles.header}>
                            <Text style={styles.headerTitle}>Job Details</Text>
                            <Flex padding="20px 0px">
                                <Divider/>
                            </Flex>
                            <Flex style={styles.headerLinksWrapper}>
                                <Flex onClick={changeBookMark} style={styles.headerLinkBlock}>
                                    {bookmark}
                                    <Text>Save to my list</Text>
                                </Flex>
                                <Flex style={styles.headerLinkBlock}>
                                    <Share/>
                                    <Text>Share</Text>
                                </Flex>
                            </Flex>
                        </Box>
                      }
                      <Flex style={breakpointStyles[breakpoint].buttonBlockHeader}>
                          <Button style={styles.applyButton}>APPLY NOW</Button>
                      </Flex>
                      <Box>
                          {breakpoint === breakpoints.lg ?
                            <Flex paddingTop="40px" justifyContent="space-between">
                                <Box>
                                    <Text style={styles.title}>{offer.title}</Text>
                                    <Text style={styles.postTime}
                                          paddingTop="8px">Posted {offer.createdAt?.substr(0, 10)}</Text>
                                </Box>
                                <Box whiteSpace="nowrap">
                                    <Text style={styles.salary}>€ {offer.salary}</Text>
                                    <Text>Brutto, per year</Text>
                                </Box>
                            </Flex>
                            :
                            <Box paddingTop="40px">
                                <Box>
                                    <Text style={styles.title}>{offer.title}</Text>
                                </Box>
                                <Flex style={styles.salaryBlock} >
                                    <Flex>
                                        <Text style={styles.postTime}
                                              paddingTop="8px">Posted {offer.createdAt?.substr(0, 10)}</Text>
                                    </Flex>
                                    <Box textAlign="right">
                                        <Text>Brutto, per year</Text>
                                        <Text style={styles.salary}>€ {offer.salary}</Text>
                                    </Box>
                                </Flex>
                            </Box>}
                          <Text paddingTop="8px">{offer.description}</Text>
                          <Flex flexDirection="column" paddingTop="45px" gap="20px">
                              <Text style={styles.responsibilities}>Responsibilities</Text>
                              <Text>{offer.description}</Text>
                          </Flex>
                          <Box style={breakpointStyles[breakpoint].compensationDescription}>
                              <Text style={styles.benefits}>Compensations & Benefits:</Text>
                              <Text paddingTop="15px">Our physicians enjoy a wide range of benefits, including:</Text>
                              <List spacing={2}>
                                  {offer.benefits.map((i, index) => <ListItem key={index} lineHeight="16px" listStyleType="square">
                                      {i}
                                  </ListItem>)}
                              </List>
                          </Box>
                          <Flex style={breakpointStyles[breakpoint].buttonBlock}>
                              <Button style={styles.applyButton}>APPLY NOW</Button>
                          </Flex>
                          <Flex style={styles.imageInfoBlock} flexDirection="column">
                              <Box>
                                  <Text style={styles.textInfoImagesBlock}>Additional info</Text>
                                  <Divider paddingTop="5px"/>
                                  <Flex style={styles.additionalWrapper}>
                                      <Flex style={styles.additionalBlock}>
                                          <Text paddingTop="15px">Employment type</Text>
                                          <Flex gap="8px">
                                              {offer.employment_type.map((i, index) =>
                                                <Flex style={styles.employmentElement} key={index} >{i}</Flex>)}
                                          </Flex>
                                      </Flex>
                                      <Flex style={styles.additionalBlock}>
                                          <Text>Benefits</Text>
                                          <Flex gap="8px">
                                              {offer.benefits.map((i, index) =>
                                                <Flex key={index} style={styles.benefitsElement}>{i}</Flex>)}
                                          </Flex>
                                      </Flex>
                                  </Flex>
                              </Box>
                              <Box>
                                  <Text style={styles.textInfoImagesBlock}>Attached images</Text>
                                  <Divider paddingTop="20px"/>
                                  <Flex style={styles.imageWrapper}>
                                      {offer.pictures.map((i, index) => <Image style={styles.image} key={index} src={i}/>)}
                                  </Flex>
                              </Box>
                          </Flex>
                          <Flex style={breakpointStyles[breakpoint].returnWrapper}>
                              <Flex style={styles.returnButtonBlock}>
                                  <Button onClick={() =>  navigate("/")} style={styles.returnButton}><LeftArrow/><Text paddingLeft="20px"> RETURN TO JOB BOARD</Text></Button>
                              </Flex>
                          </Flex>
                      </Box>
                  </Flex>
                  <Box style={breakpointStyles[breakpoint].mapWrapper}>
                      <Box style={breakpointStyles[breakpoint].Title}>
                          <Text fontSize="28px" fontWeight="700">Contacts</Text>
                          <Flex padding="5px 0px 15px 0px">
                              <Divider />
                          </Flex>
                      </Box>
                      <Box style={styles.mapHeader}>
                          <Box padding="30px 60px 20px 60px">
                              <Box fontSize="20px" fontWeight="700">
                                  <Text>Department name.</Text>
                                  <Text>{offer.name}</Text>
                              </Box>
                              <Flex paddingTop="15px" alignItems="center" >
                                  <GpsMarker/>
                                  <Text paddingLeft="10px">{offer.address}</Text>
                              </Flex>
                              <Text paddingTop="10px">{offer.phone}</Text>
                              <Text>{offer.email}</Text>
                          </Box>
                          <Flex>
                              <Map center={center}/>
                          </Flex>
                      </Box>
                  </Box>
              </Flex>
          </Flex>
    )
}