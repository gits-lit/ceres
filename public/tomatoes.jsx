/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/tomatoes.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="AuxScene">
        <group>
          <mesh
            material={
              materials['Box material 1_93920da3-46b4-4b1e-9a0b-4cdf9aa026fa_e1f69897-22e6-4217-9a8e-2ae799f8ad9a']
            }
            geometry={nodes.main_1.geometry}
            name="main_1"
          />
          <mesh
            material={
              materials['Box material 6_8c085fc6-b1f9-4685-95bb-f89861314608_e62ec9e1-0528-4256-b2ac-6ff2bf4cbd02']
            }
            geometry={nodes.das_1.geometry}
            name="das_1"
          />
          <mesh
            material={
              materials['Box material 11_21561d6f-b990-4e59-b836-76a0fb20fae2_260526a5-c88f-4922-840f-c48d8d98af82']
            }
            geometry={nodes.sdaasd_1.geometry}
            name="sdaasd_1"
          />
          <mesh
            material={
              materials['Box material 7_bdf8c63d-5674-46f8-b473-c59552ad0e51_9015f77c-c7ac-4538-b10d-b25586cbb224']
            }
            geometry={nodes.mid_4_1.geometry}
            name="mid_4_1"
          />
          <mesh
            material={
              materials['Box material 13_bba6e437-b257-46a1-8c39-76b0cde1f910_a569f3e9-d823-422f-aae7-5d22f4fd4f65']
            }
            geometry={nodes.mid_5_1.geometry}
            name="mid_5_1"
          />
          <mesh
            material={
              materials['Box material 4_2c64d34e-b375-449a-91ff-dc13003df6b7_4961abb5-2af5-4000-9052-8201420542e9']
            }
            geometry={nodes.mid_1_1.geometry}
            name="mid_1_1"
          />
          <mesh
            material={
              materials['Box material 12_c293bd87-efcc-477e-8c1a-2eb14b372875_9e960336-8d47-45f1-9cd4-6d5080d56b84']
            }
            geometry={nodes.mid_2_1.geometry}
            name="mid_2_1"
          />
          <mesh
            material={
              materials['Box material 5_bd4901aa-6e24-4d1d-8237-a8ec78e41f75_66b5104f-d888-4ac2-997c-81e35e4b6bb3']
            }
            geometry={nodes.side_1.geometry}
            name="side_1"
          />
          <mesh
            material={
              materials['Box material 2_753e2819-fc5e-49c0-b0d7-32581861b1a0_7b690942-629d-4d06-bf15-b095665c47a8']
            }
            geometry={nodes.bot_1.geometry}
            name="bot_1"
          />
          <mesh
            material={
              materials['Box material 9_514dea90-c1bf-45f4-a437-dc19a23dc900_f75f8227-4a36-42f9-ae6f-1fd0146a40ab']
            }
            geometry={nodes.bot_1_1.geometry}
            name="bot_1_1"
          />
          <mesh
            material={
              materials['Box material 3_05386261-4c16-40e7-8f53-a63a1c9db07b_fbdd4824-6e46-4f3c-9dc2-4bdf6828bd53']
            }
            geometry={nodes.TOP_1.geometry}
            name="TOP_1"
          />
          <mesh
            material={
              materials['Box material 8_05f1fabc-5dbf-42d7-84f6-087a72559541_3a5206ea-9ffb-4962-a6cf-cfaf1e2dc0de']
            }
            geometry={nodes.TOP1_1.geometry}
            name="TOP1_1"
          />
          <mesh
            material={
              materials['Box material 14_9fa45020-5a45-49f5-bf89-0d188224ea77_1790012c-ecea-417c-abcc-212e925dc859']
            }
            geometry={nodes.TOP_2_1.geometry}
            name="TOP_2_1"
          />
          <mesh
            material={
              materials['Box material 15_723502af-ede7-4c12-b8bc-82283aa02aed_d294cceb-58e5-4b18-a97b-5478ee2db7c8']
            }
            geometry={nodes.TOP_3_1.geometry}
            name="TOP_3_1"
          />
          <mesh
            material={
              materials['Box material 17_f033ab7a-78e5-452e-8a98-bf41cb29ebf8_dcaa1854-3dea-4d8f-8fee-55213aa8cc2f']
            }
            geometry={nodes.TOP_5_1.geometry}
            name="TOP_5_1"
          />
          <mesh
            material={
              materials['Box material 18_b11eeaa7-c3fc-454f-891a-c7c828a660b3_f5fd7ef4-06d6-4c97-b6b3-b15a73a01513']
            }
            geometry={nodes.TOP_6_1.geometry}
            name="TOP_6_1"
          />
          <mesh
            material={
              materials['Box material 10_bf77a0ce-cefd-4c4c-8863-f7b947e09d09_75445bb0-8a36-457b-b84e-8219a9ed34b4']
            }
            geometry={nodes.side_1.geometry}
            name="side_1"
          />
          <mesh
            material={
              materials['Box material 16_79977c63-4261-4b2a-aa46-4180a8931f01_594f5a7f-f4df-441d-b16b-6e7d4f48fb40']
            }
            geometry={nodes.TOP_4_1.geometry}
            name="TOP_4_1"
          />
          <mesh
            material={
              materials['Box material 55_1f692275-fcb3-42e1-b839-dc037cfc3bbc_381dc377-a353-4bd9-9e0f-dab7cfda9276']
            }
            geometry={nodes.main_4.geometry}
            name="main_4"
          />
          <mesh
            material={
              materials['Box material 56_2b01c6e0-bf09-4d68-ac39-8ee0e9c4c920_80aa6c4f-a457-492a-9950-6036c0ccfc23']
            }
            geometry={nodes.das_4.geometry}
            name="das_4"
          />
          <mesh
            material={
              materials['Box material 57_1ad369ef-0a40-45d4-9a00-485a7657e361_2617b721-196b-43a6-9886-7f6159c29258']
            }
            geometry={nodes.sdaasd_4.geometry}
            name="sdaasd_4"
          />
          <mesh
            material={
              materials['Box material 58_d5eb5502-d8f5-4e79-a205-09fdb24dc5e9_48e23c39-81af-4154-a709-58a7a87765c5']
            }
            geometry={nodes.mid_4_4.geometry}
            name="mid_4_4"
          />
          <mesh
            material={
              materials['Box material 59_f6c8e3c2-62a3-4915-9970-494c148bee7f_70f08fc1-27f7-4d97-b3b2-0d67fc350cc8']
            }
            geometry={nodes.mid_5_4.geometry}
            name="mid_5_4"
          />
          <mesh
            material={
              materials['Box material 60_ad8f0d4a-2798-4e15-be1c-9c8b6bc78513_5c87d0a1-ce5e-4ae9-b02a-8823c399485a']
            }
            geometry={nodes.mid_1_4.geometry}
            name="mid_1_4"
          />
          <mesh
            material={
              materials['Box material 61_97934b45-b01c-4565-be09-db4f09b81e55_a9afd3d1-0edd-461b-ad99-3a5540aaaf6e']
            }
            geometry={nodes.mid_2_4.geometry}
            name="mid_2_4"
          />
          <mesh
            material={
              materials['Box material 62_e2bc3b84-2001-420e-9283-53f2dd5b9656_121c56b0-adb8-4126-96bb-ab375407d6ab']
            }
            geometry={nodes.side_4.geometry}
            name="side_4"
          />
          <mesh
            material={
              materials['Box material 63_eb377272-b4a9-45fc-87fe-95acdefa8acc_167c9b6a-19ce-4f9d-8a49-d54468ea48e9']
            }
            geometry={nodes.bot_4.geometry}
            name="bot_4"
          />
          <mesh
            material={
              materials['Box material 64_00ddfdcf-d46d-44e2-8f48-c38402c1402a_0423e472-e0b0-4f76-b140-ad9c53211f51']
            }
            geometry={nodes.side_2_3.geometry}
            name="side_2_3"
          />
          <mesh
            material={
              materials['Box material 65_553ae362-218f-4991-85e2-09f061a9e7aa_ead75316-3481-4032-b32a-24552d315fce']
            }
            geometry={nodes.bot_1_4.geometry}
            name="bot_1_4"
          />
          <mesh
            material={
              materials['Box material 66_1f97b2d2-adc8-4334-bc5e-134184ff6e29_a572d7bf-c935-4fb3-9450-23efc27afcdc']
            }
            geometry={nodes.TOP_4.geometry}
            name="TOP_4"
          />
          <mesh
            material={
              materials['Box material 67_42f31e0f-136e-42e7-bf05-6131a99f5b30_5f90b8d3-e851-4959-83a3-1f4490e90c32']
            }
            geometry={nodes.TOP1_4.geometry}
            name="TOP1_4"
          />
          <mesh
            material={
              materials['Box material 68_47933f39-f6a2-430e-8331-c3fa8004ff24_06235fab-c79d-4c05-bf4c-b8e3f52f92a1']
            }
            geometry={nodes.TOP_2_4.geometry}
            name="TOP_2_4"
          />
          <mesh
            material={
              materials['Box material 70_84f6dcf6-49e5-4f61-bebb-b75f8bb56c02_7b210d4e-88d3-4278-a373-a7e804f5836f']
            }
            geometry={nodes.TOP_4_4.geometry}
            name="TOP_4_4"
          />
          <mesh
            material={
              materials['Box material 71_8cc654cf-0590-465e-b396-c0c275a8bd55_35a35f6a-7789-40ff-a5cd-1776c672b2b6']
            }
            geometry={nodes.TOP_5_4.geometry}
            name="TOP_5_4"
          />
          <mesh
            material={
              materials['Box material 72_977d6fd9-99e7-4485-b779-4ea3dd7f98fc_9f2888a6-bae9-443c-bd92-f472263f6b8d']
            }
            geometry={nodes.TOP_6_4.geometry}
            name="TOP_6_4"
          />
          <mesh
            material={
              materials['Box material 69_ea3c0bb6-5bea-44a9-a13a-752d90fb561c_0edf6806-3c1b-4ad5-85b6-d0069f17d415']
            }
            geometry={nodes.TOP_3_4.geometry}
            name="TOP_3_4"
          />
          <mesh
            material={
              materials['Box material 73_9e356b3c-00dd-4fe0-84e2-ec1913394b0e_3816fc8d-d786-4436-8d66-c79f5be0abe6']
            }
            geometry={nodes.main.geometry}
            name="main"
          />
          <mesh
            material={
              materials['Box material 74_17b6c420-6044-4b6c-84f4-703529dad0a2_a0b214ad-a642-468f-8f99-c1ca2b5a3583']
            }
            geometry={nodes.das.geometry}
            name="das"
          />
          <mesh
            material={
              materials['Box material 75_8f1b8d32-6e3f-4d55-a88e-adda108ed180_a43a95d9-c615-4380-b120-a07d999ebfcd']
            }
            geometry={nodes.sdaasd.geometry}
            name="sdaasd"
          />
          <mesh
            material={
              materials['Box material 77_f237da78-5d1f-4d39-a1b7-137dd3a87b6e_0a0a70f8-d84c-402a-a58f-287dd5525728']
            }
            geometry={nodes.mid_5.geometry}
            name="mid_5"
          />
          <mesh
            material={
              materials['Box material 78_d37bca33-43b5-4d7d-b38d-ed568cf0f0c0_fb0d4397-1b21-491f-85a2-698eca8111be']
            }
            geometry={nodes.mid_1.geometry}
            name="mid_1"
          />
          <mesh
            material={
              materials['Box material 79_c4f1c849-70bc-44d6-8fb8-2d2efeda17e4_7552db69-ad95-4c73-9f2a-b25b9988f2f1']
            }
            geometry={nodes.mid_2.geometry}
            name="mid_2"
          />
          <mesh
            material={
              materials['Box material 80_e58de493-180c-4b29-b434-1710c2a3fda4_47cb8b95-19cb-4ba7-bae4-d356541c3944']
            }
            geometry={nodes.side.geometry}
            name="side"
          />
          <mesh
            material={
              materials['Box material 81_daa70074-24e1-49ab-84d2-dca2e836433c_9bf4764d-4650-4557-a9cc-fa2a7223b909']
            }
            geometry={nodes.bot.geometry}
            name="bot"
          />
          <mesh
            material={
              materials['Box material 82_0c9ea505-ab7b-4718-a6dd-d6a0f6e125ab_cb439101-d9ce-4729-a411-b12cb62f5de9']
            }
            geometry={nodes.side_2.geometry}
            name="side_2"
          />
          <mesh
            material={
              materials['Box material 83_8f7bcf2b-9c24-4bdc-8be2-623f8cabdff9_481000c4-e110-4d0b-9761-e060f86521b6']
            }
            geometry={nodes.bot_1.geometry}
            name="bot_1"
          />
          <mesh
            material={
              materials['Box material 84_7acc9f58-f51e-4829-a455-e4b4195be7a8_211b57e5-702e-43bc-a027-1e67ae66d751']
            }
            geometry={nodes.TOP.geometry}
            name="TOP"
          />
          <mesh
            material={
              materials['Box material 85_2b023c9c-4c02-4e49-9652-89923053d8d0_cae0fb40-7e9e-4a03-893d-fe22b599ae56']
            }
            geometry={nodes.TOP1.geometry}
            name="TOP1"
          />
          <mesh
            material={
              materials['Box material 86_377ff81a-d002-4036-9276-2477641eda56_8ca8b507-1805-4807-8c4b-92774237027e']
            }
            geometry={nodes.TOP_2.geometry}
            name="TOP_2"
          />
          <mesh
            material={
              materials['Box material 87_88b33a44-8b72-4c90-92c6-2ee91290b5b5_3dc26a80-f2f8-4293-80c2-3c0927ee11e4']
            }
            geometry={nodes.TOP_3.geometry}
            name="TOP_3"
          />
          <mesh
            material={
              materials['Box material 88_f8a6b857-a245-4473-b8cb-59f6344d93ea_dada34b1-095b-4ca7-afd2-9f0b372bffcd']
            }
            geometry={nodes.TOP_4.geometry}
            name="TOP_4"
          />
          <mesh
            material={
              materials['Box material 89_94403d5e-1bb1-4d03-8552-e87aa8e87fc9_9d93a443-c370-4d0c-bb45-d8192df172da']
            }
            geometry={nodes.TOP_5.geometry}
            name="TOP_5"
          />
          <mesh
            material={
              materials['Box material 90_e26bc31e-ff4e-4b87-8232-fa8d4b1d68ff_0889c00e-bc18-4ea4-8266-24f635a53a38']
            }
            geometry={nodes.TOP_6.geometry}
            name="TOP_6"
          />
          <mesh
            material={
              materials['Box material 76_4e2d699c-0d41-4e8d-b6fa-a23977e5d1b9_2f886436-02f9-42ec-a0cc-34d477709aad']
            }
            geometry={nodes.mid_4.geometry}
            name="mid_4"
          />
        </group>
      </scene>
    </group>
  )
}
