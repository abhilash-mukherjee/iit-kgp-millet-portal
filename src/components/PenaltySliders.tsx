import React from 'react';
import { Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { badGrainAtom, brokenGrainAtom, foreignGrainAtom, stonesPebblesAtom } from '@/store/sliderAtoms'; // adjust the path as necessary

const PenaltySliders = () => {
  const [badGrain, setBadGrain] = useRecoilState(badGrainAtom);
  const [brokenGrain, setBrokenGrain] = useRecoilState(brokenGrainAtom);
  const [foreignGrain, setForeignGrain] = useRecoilState(foreignGrainAtom);
  const [stonesPebbles, setStonesPebbles] = useRecoilState(stonesPebblesAtom);

  return (
    <Flex direction="column" width="100%">
      <Text>Bad Grain</Text>
      <Slider value={badGrain} onChange={setBadGrain} min={0} max={100} mb={4} colorScheme='teal'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb style={{'backgroundColor':'teal'}}/>
      </Slider>

      <Text>Broken Grain</Text>
      <Slider value={brokenGrain} onChange={setBrokenGrain} min={0} max={100} mb={4} colorScheme='teal'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb style={{'backgroundColor':'teal'}}/>
      </Slider>

      <Text>Foreign Grain</Text>
      <Slider value={foreignGrain} onChange={setForeignGrain} min={0} max={100} mb={4} colorScheme='teal'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb style={{'backgroundColor':'teal'}}/>
      </Slider>

      <Text>Stones & Pebbles</Text>
      <Slider value={stonesPebbles} onChange={setStonesPebbles} min={0} max={100} mb={4} colorScheme='teal'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb style={{'backgroundColor':'teal'}}/>
      </Slider>
    </Flex>
  );
};

export default PenaltySliders;
