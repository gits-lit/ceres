import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber';

import './style.less';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Onion(props) {
 const group = useRef()
 const { nodes, materials, animations } = useLoader(GLTFLoader, '/onions.gltf')

 return (
   <group ref={group} {...props} dispose={null} scale={[0.6, 0.6, 0.6]}>
     <scene name="AuxScene">
       <group>
         <mesh
           material={
             materials['Box material 1_93920da3-46b4-4b1e-9a0b-4cdf9aa026fa_871af12d-9566-4b68-af54-73076865d432']
           }
           geometry={nodes.main_1.geometry}
           name="main_1"
         />
         <mesh
           material={
             materials['Box material 6_8c085fc6-b1f9-4685-95bb-f89861314608_1c051e88-9f0d-47f6-96c4-d9c2bc0fc916']
           }
           geometry={nodes.das_1.geometry}
           name="das_1"
         />
         <mesh
           material={
             materials['Box material 11_21561d6f-b990-4e59-b836-76a0fb20fae2_392cd052-d8fe-4103-a0a9-fb562a588fd0']
           }
           geometry={nodes.sdaasd_1.geometry}
           name="sdaasd_1"
         />
         <mesh
           material={
             materials['Box material 7_bdf8c63d-5674-46f8-b473-c59552ad0e51_f50c14a5-14d3-4c37-9d8e-675661f801e8']
           }
           geometry={nodes.mid_4_1.geometry}
           name="mid_4_1"
         />
         <mesh
           material={
             materials['Box material 13_bba6e437-b257-46a1-8c39-76b0cde1f910_9a5bc50d-d16c-45b9-b9a4-d3387f6ea572']
           }
           geometry={nodes.mid_5_1.geometry}
           name="mid_5_1"
         />
         <mesh
           material={
             materials['Box material 4_2c64d34e-b375-449a-91ff-dc13003df6b7_1e8784ca-4f38-4e1c-a833-deaf2a492060']
           }
           geometry={nodes.mid_1_1.geometry}
           name="mid_1_1"
         />
         <mesh
           material={
             materials['Box material 12_c293bd87-efcc-477e-8c1a-2eb14b372875_fc21330e-8954-4453-8f02-ad0b87a2c423']
           }
           geometry={nodes.mid_2_1.geometry}
           name="mid_2_1"
         />
         <mesh
           material={
             materials['Box material 5_bd4901aa-6e24-4d1d-8237-a8ec78e41f75_1c8d43d9-4831-4e3c-827b-f0dbb224af5c']
           }
           geometry={nodes.side_1.geometry}
           name="side_1"
         />
         <mesh
           material={
             materials['Box material 2_753e2819-fc5e-49c0-b0d7-32581861b1a0_fc3dfbfd-74bb-48a2-b70c-d6c1b0263f32']
           }
           geometry={nodes.bot_1.geometry}
           name="bot_1"
         />
         <mesh
           material={
             materials['Box material 9_514dea90-c1bf-45f4-a437-dc19a23dc900_cc9697df-9c0e-4f20-a2a5-2c596e18275c']
           }
           geometry={nodes.bot_1_1.geometry}
           name="bot_1_1"
         />
         <mesh
           material={
             materials['Box material 3_05386261-4c16-40e7-8f53-a63a1c9db07b_71525555-f420-4a12-9af3-5e913e23d146']
           }
           geometry={nodes.TOP_1.geometry}
           name="TOP_1"
         />
         <mesh
           material={
             materials['Box material 8_05f1fabc-5dbf-42d7-84f6-087a72559541_65a1137f-8ee3-44eb-9936-da36efe61382']
           }
           geometry={nodes.TOP1_1.geometry}
           name="TOP1_1"
         />
         <mesh
           material={
             materials['Box material 10_bf77a0ce-cefd-4c4c-8863-f7b947e09d09_51ad8007-3cea-467d-aecd-2cec8bf3526d']
           }
           geometry={nodes.side_1_1.geometry}
           name="side_1_1"
         />
         <mesh
           material={
             materials['Box material 14_9fa45020-5a45-49f5-bf89-0d188224ea77_c0a35d4a-9e99-4e4b-a98f-d4f991d1e475']
           }
           geometry={nodes.TOP_2_1.geometry}
           name="TOP_2_1"
         />
         <mesh
           material={
             materials['Box material 16_79977c63-4261-4b2a-aa46-4180a8931f01_d45bbcbb-1962-4e8c-9b09-7ced74543bc0']
           }
           geometry={nodes.TOP_4_1.geometry}
           name="TOP_4_1"
         />
         <mesh
           material={
             materials['Box material 15_723502af-ede7-4c12-b8bc-82283aa02aed_252833dc-9b19-49ab-984a-dd7b05281e8a']
           }
           geometry={nodes.TOP_3_1.geometry}
           name="TOP_3_1"
         />
         <mesh
           material={
             materials['Box material 49_83376ded-fa38-47f6-9e17-ba3eaa6eee59_a5f934f4-b120-4a5c-afad-e07f5aed3660']
           }
           geometry={nodes.main_4.geometry}
           name="main_4"
         />
         <mesh
           material={
             materials['Box material 50_370b0ddf-df43-497a-ab93-a94d039675a2_c1de7ef0-60bf-40c2-accc-5ffeb69bdbbe']
           }
           geometry={nodes.das_4.geometry}
           name="das_4"
         />
         <mesh
           material={
             materials['Box material 51_77a4a225-f6f2-4fbb-a2f4-06902fa48033_667345d5-f97f-4e52-930b-18f132a4b1b4']
           }
           geometry={nodes.sdaasd_4.geometry}
           name="sdaasd_4"
         />
         <mesh
           material={
             materials['Box material 52_022a562d-7e93-4df8-9076-c782c11f3dc5_ec320263-177d-493b-bdcc-bde1e3fbfe45']
           }
           geometry={nodes.mid_4_4.geometry}
           name="mid_4_4"
         />
         <mesh
           material={
             materials['Box material 53_26ef71de-8ba5-43ee-8762-e885293a653c_e43c9c3e-4e44-4d1f-a88e-ac3d192a01c5']
           }
           geometry={nodes.mid_5_4.geometry}
           name="mid_5_4"
         />
         <mesh
           material={
             materials['Box material 54_b8c08111-38eb-426e-8344-99fa130e6040_6fe69ea9-377e-4ec8-9cb2-8ad17a140124']
           }
           geometry={nodes.mid_1_4.geometry}
           name="mid_1_4"
         />
         <mesh
           material={
             materials['Box material 55_9c663e04-2432-4a1d-ad87-9bb992b2e952_bec45b46-a56e-4eb5-92e4-315150196262']
           }
           geometry={nodes.mid_2_4.geometry}
           name="mid_2_4"
         />
         <mesh
           material={
             materials['Box material 56_625f00de-b8dc-4e17-a03e-4e91ddaf0a28_8383ad75-e3cc-4b35-91d9-1ab00f0d3e0e']
           }
           geometry={nodes.side_4.geometry}
           name="side_4"
         />
         <mesh
           material={
             materials['Box material 57_edf0ffa4-7743-4449-bf8b-43f1f35a9b8d_7d7b39d3-eef8-457c-972d-e86398cfd778']
           }
           geometry={nodes.bot_4.geometry}
           name="bot_4"
         />
         <mesh
           material={
             materials['Box material 58_c8c16aca-5c31-4f07-a7e3-047fdbeffde0_eb13cfb3-24df-4e33-925c-f532a977bfc0']
           }
           geometry={nodes.bot_1_4.geometry}
           name="bot_1_4"
         />
         <mesh
           material={
             materials['Box material 59_739a58e1-5bd2-406f-a183-d6ab5ae0d750_17bebc41-4282-4a9b-a4e2-ddc10cfb8d9e']
           }
           geometry={nodes.TOP_4.geometry}
           name="TOP_4"
         />
         <mesh
           material={
             materials['Box material 61_67226cae-b34b-4526-bd9a-a5903f1649a2_0c57cff2-8845-4159-b813-9bb2af64b4e2']
           }
           geometry={nodes.side_1_4.geometry}
           name="side_1_4"
         />
         <mesh
           material={
             materials['Box material 62_eeec26e5-97b2-4583-a15f-c4c5eddebb26_2f32a95f-b977-4316-bbe0-7912d5ddef45']
           }
           geometry={nodes.TOP_2_4.geometry}
           name="TOP_2_4"
         />
         <mesh
           material={
             materials['Box material 63_e6c06988-fa21-46b9-9315-502c58459f52_868f3bcc-2fcc-467a-89c6-6e87f1baed7b']
           }
           geometry={nodes.TOP_3_4.geometry}
           name="TOP_3_4"
         />
         <mesh
           material={
             materials['Box material 64_fa447a5d-274f-4679-b51d-d0eaef9de0de_50aff027-bd95-48a5-96a5-a82a992ef3a4']
           }
           geometry={nodes.TOP_4_4.geometry}
           name="TOP_4_4"
         />
         <mesh
           material={
             materials['Box material 60_ed7ad6ad-3ff7-4c02-8731-da8e332d0137_f8168398-e82b-4c04-bcda-d4be2ef0fe40']
           }
           geometry={nodes.TOP1_4.geometry}
           name="TOP1_4"
         />
         <mesh
           material={
             materials['Box material 65_20252af2-3649-40b6-b3bc-172141c0f281_b7c58d75-8255-4916-8184-5a3a3da84b34']
           }
           geometry={nodes.main.geometry}
           name="main"
         />
         <mesh
           material={
             materials['Box material 66_0a61c7bf-1d34-4b39-8330-c4e848f93a66_5b715861-a7c1-408c-a9b0-14608d70e83f']
           }
           geometry={nodes.das.geometry}
           name="das"
         />
         <mesh
           material={
             materials['Box material 67_e88dff74-ef79-4924-a60d-43e555de9c9f_a433d71e-584e-474f-8379-8d9944b48f40']
           }
           geometry={nodes.sdaasd.geometry}
           name="sdaasd"
         />
         <mesh
           material={
             materials['Box material 68_21efdd23-321e-41e5-a5f9-fb400f8af19c_c4ac9851-3a23-49a0-a9f6-c6cb361ac378']
           }
           geometry={nodes.mid_4.geometry}
           name="mid_4"
         />
         <mesh
           material={
             materials['Box material 69_6314f73d-87dc-42a3-bec9-1ccb30bbb80b_b38933ab-dd0f-4b93-9fb2-518d00718c48']
           }
           geometry={nodes.mid_5.geometry}
           name="mid_5"
         />
         <mesh
           material={
             materials['Box material 70_3b26d331-46b1-4dab-af58-ed353602ea3b_0f028504-5234-436e-be8e-168190732461']
           }
           geometry={nodes.mid_1.geometry}
           name="mid_1"
         />
         <mesh
           material={
             materials['Box material 71_bb8d59ef-0ee1-4922-b255-916ca94abca8_c3a8ba30-bcc0-4530-bf3f-aff12677bdda']
           }
           geometry={nodes.mid_2.geometry}
           name="mid_2"
         />
         <mesh
           material={
             materials['Box material 72_c5c45d79-7690-4f21-aeeb-40d8376f237e_cab01db1-02f2-4d0a-adb2-4d0cdee706ce']
           }
           geometry={nodes.side.geometry}
           name="side"
         />
         <mesh
           material={
             materials['Box material 73_471a2002-e894-46bb-91ac-9b2107833f21_bd5ad265-9cc5-429f-8b4a-3a1dcd9e5040']
           }
           geometry={nodes.bot.geometry}
           name="bot"
         />
         <mesh
           material={
             materials['Box material 74_23a28d4a-728e-4956-bae9-ea38d5715308_135c1922-b5e4-454f-82ea-609ac15a5fd4']
           }
           geometry={nodes.bot_1.geometry}
           name="bot_1"
         />
         <mesh
           material={
             materials['Box material 75_bc572455-0af9-4173-b761-8e6d854d11b9_06c6a805-732b-4363-a507-1c0e7f8e62a4']
           }
           geometry={nodes.TOP.geometry}
           name="TOP"
         />
         <mesh
           material={
             materials['Box material 77_c0528201-863c-410e-9b8d-942b06c934b2_7b4c548f-9dfd-429a-8303-30bf04aab299']
           }
           geometry={nodes.side_1.geometry}
           name="side_1"
         />
         <mesh
           material={
             materials['Box material 78_64cc1371-c7f8-48cc-ac87-9e2ee9c63a25_1fbb8be5-bb1c-4cfc-b5d7-8f77d0f1d879']
           }
           geometry={nodes.TOP_2.geometry}
           name="TOP_2"
         />
         <mesh
           material={
             materials['Box material 79_e7fd5607-6c1c-4209-9cf0-3105c496c164_6700f2e1-dc7e-4559-8892-528b98b1532c']
           }
           geometry={nodes.TOP_3.geometry}
           name="TOP_3"
         />
         <mesh
           material={
             materials['Box material 80_17253769-4f74-468d-9257-f646d8698d33_5c0cb042-57b2-46ce-a596-dac4bf480335']
           }
           geometry={nodes.TOP_4.geometry}
           name="TOP_4"
         />
         <mesh
           material={
             materials['Box material 76_df2fb5e7-3e93-458a-9ce7-1f3379a74be0_b1ad3f53-c6ce-4947-a5fc-d94fdfc763c6']
           }
           geometry={nodes.TOP1.geometry}
           name="TOP1"
         />
       </group>
     </scene>
   </group>
 )
}

function Tomato(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/tomatoes.gltf')

  return (
    <group ref={group} {...props} dispose={null} scale={[0.6, 0.6, 0.6]}>
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


function Cabbage(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/cabbages.gltf')

  return (
    <group ref={group} {...props} dispose={null} scale={[0.7, 0.7, 0.7]}>
      <scene name="AuxScene">
        <group>
          <mesh
            material={
              materials['Box material 1_93920da3-46b4-4b1e-9a0b-4cdf9aa026fa_46e9d766-6eaa-485a-acc5-1a2b2a4da777']
            }
            geometry={nodes.main_2.geometry}
            name="main_2"
          />
          <mesh
            material={
              materials['Box material 6_8c085fc6-b1f9-4685-95bb-f89861314608_36164fc5-f9e5-42c6-a24d-1566f874d0b6']
            }
            geometry={nodes.das_2.geometry}
            name="das_2"
          />
          <mesh
            material={
              materials['Box material 11_21561d6f-b990-4e59-b836-76a0fb20fae2_29a3641c-acc1-4dd3-95ac-e92451fe7f62']
            }
            geometry={nodes.sdaasd_2.geometry}
            name="sdaasd_2"
          />
          <mesh
            material={
              materials['Box material 7_bdf8c63d-5674-46f8-b473-c59552ad0e51_8080511f-d0ba-45ed-bcbb-8960b71a4406']
            }
            geometry={nodes.mid_4_2.geometry}
            name="mid_4_2"
          />
          <mesh
            material={
              materials['Box material 13_bba6e437-b257-46a1-8c39-76b0cde1f910_1c400638-5882-4b3f-990d-44e6f9598270']
            }
            geometry={nodes.mid_5_2.geometry}
            name="mid_5_2"
          />
          <mesh
            material={
              materials['Box material 4_2c64d34e-b375-449a-91ff-dc13003df6b7_e2cbbe11-88fc-4f02-ab31-e4f92cdf6583']
            }
            geometry={nodes.mid_1_2.geometry}
            name="mid_1_2"
          />
          <mesh
            material={
              materials['Box material 12_c293bd87-efcc-477e-8c1a-2eb14b372875_58224363-8d62-4e63-b0a4-3f8f8845e97b']
            }
            geometry={nodes.mid_2_2.geometry}
            name="mid_2_2"
          />
          <mesh
            material={
              materials['Box material 5_bd4901aa-6e24-4d1d-8237-a8ec78e41f75_d17afcb0-08f8-48a8-a421-0d4c84a4bad1']
            }
            geometry={nodes.side_2.geometry}
            name="side_2"
          />
          <mesh
            material={
              materials['Box material 2_753e2819-fc5e-49c0-b0d7-32581861b1a0_18813788-cd5a-4a37-9ac9-383ecbfc682a']
            }
            geometry={nodes.bot_2.geometry}
            name="bot_2"
          />
          <mesh
            material={
              materials['Box material 9_514dea90-c1bf-45f4-a437-dc19a23dc900_e36a54f7-c0b5-40a4-8a9f-c2c2df93c6c2']
            }
            geometry={nodes.bot_1_2.geometry}
            name="bot_1_2"
          />
          <mesh
            material={
              materials['Box material 3_05386261-4c16-40e7-8f53-a63a1c9db07b_fac4f24c-8f3f-4146-893c-ebc2f82b2ea3']
            }
            geometry={nodes.TOP_2.geometry}
            name="TOP_2"
          />
          <mesh
            material={
              materials['Box material 10_bf77a0ce-cefd-4c4c-8863-f7b947e09d09_3687f961-5af8-41e2-a5c3-c9e5e4d5a480']
            }
            geometry={nodes.side_1_2.geometry}
            name="side_1_2"
          />
          <mesh
            material={
              materials['Box material 8_05f1fabc-5dbf-42d7-84f6-087a72559541_86d5a500-1859-4edb-bd17-317f039507ec']
            }
            geometry={nodes.TOP1_2.geometry}
            name="TOP1_2"
          />
          <mesh
            material={
              materials['Box material 1_93920da3-46b4-4b1e-9a0b-4cdf9aa026fa 1_43fe2682-3a20-4f1f-9ae1-d360e8f8b0f4']
            }
            geometry={nodes.main_1.geometry}
            name="main_1"
          />
          <mesh
            material={
              materials['Box material 6_8c085fc6-b1f9-4685-95bb-f89861314608 1_0cab504c-4204-47c2-88bd-0476a6a14853']
            }
            geometry={nodes.das_1.geometry}
            name="das_1"
          />
          <mesh
            material={
              materials['Box material 11_21561d6f-b990-4e59-b836-76a0fb20fae2 1_015281d5-edc8-477b-aeec-dda3e29adaff']
            }
            geometry={nodes.sdaasd_1.geometry}
            name="sdaasd_1"
          />
          <mesh
            material={
              materials['Box material 7_bdf8c63d-5674-46f8-b473-c59552ad0e51 1_e76af97d-f0a3-4400-8866-5e02f5a4b9db']
            }
            geometry={nodes.mid_4_1.geometry}
            name="mid_4_1"
          />
          <mesh
            material={
              materials['Box material 13_bba6e437-b257-46a1-8c39-76b0cde1f910 1_4b32e287-354a-4362-90a1-faf791d0b40a']
            }
            geometry={nodes.mid_5_1.geometry}
            name="mid_5_1"
          />
          <mesh
            material={
              materials['Box material 4_2c64d34e-b375-449a-91ff-dc13003df6b7 1_9a8b35ee-b464-4be8-9b75-099c7c681af6']
            }
            geometry={nodes.mid_1_1.geometry}
            name="mid_1_1"
          />
          <mesh
            material={
              materials['Box material 12_c293bd87-efcc-477e-8c1a-2eb14b372875 1_ebba831f-6848-4f54-9d6a-b794ba49b040']
            }
            geometry={nodes.mid_2_1.geometry}
            name="mid_2_1"
          />
          <mesh
            material={
              materials['Box material 5_bd4901aa-6e24-4d1d-8237-a8ec78e41f75 1_fa45936a-acff-4fc7-b577-a3a7083ebedc']
            }
            geometry={nodes.side_1.geometry}
            name="side_1"
          />
          <mesh
            material={
              materials['Box material 2_753e2819-fc5e-49c0-b0d7-32581861b1a0 1_9736687a-78ea-4e4a-b13d-fa30d669e794']
            }
            geometry={nodes.bot_1.geometry}
            name="bot_1"
          />
          <mesh
            material={
              materials['Box material 9_514dea90-c1bf-45f4-a437-dc19a23dc900 1_dc1498ce-4ccb-4910-95e5-286bed555665']
            }
            geometry={nodes.bot_1_1.geometry}
            name="bot_1_1"
          />
          <mesh
            material={
              materials['Box material 3_05386261-4c16-40e7-8f53-a63a1c9db07b 1_148baa41-c322-4a24-8820-a7a58cb35903']
            }
            geometry={nodes.TOP_1.geometry}
            name="TOP_1"
          />
          <mesh
            material={
              materials['Box material 10_bf77a0ce-cefd-4c4c-8863-f7b947e09d09 1_c0bdc8ac-d226-4e7d-b86f-a4981ab20bb3']
            }
            geometry={nodes.side_1_1.geometry}
            name="side_1_1"
          />
          <mesh
            material={
              materials['Box material 8_05f1fabc-5dbf-42d7-84f6-087a72559541 1_587f4098-5fbd-4ea7-b48a-6beab0d1a266']
            }
            geometry={nodes.TOP1_1.geometry}
            name="TOP1_1"
          />
        </group>
      </scene>
    </group>
  )
}

function BellPepper(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/bellPeppers.gltf')

  return (
    <group ref={group} {...props} dispose={null} position={props.position} scale={[0.7,0.7,0.7]}>
      <scene name="AuxScene">
        <group>
          <mesh
            material={materials['Box material 4_0d232f6b-7592-49a6-a67b-5c04ebddef93']}
            geometry={nodes['Box_2_-_baked_16'].geometry}
            name="Box_2_-_baked_16"
          />
          <mesh
            material={materials['Box material 13_6ad06321-2100-4305-a1b4-f218783e9cbf']}
            geometry={nodes['Box_2_-_baked_17'].geometry}
            name="Box_2_-_baked_17"
          />
          <mesh
            material={materials['Box material 9_93373aab-2fbc-40e9-a8da-a73e3f95dc75']}
            geometry={nodes['Box_2_-_baked_18'].geometry}
            name="Box_2_-_baked_18"
          />
          <mesh
            material={materials['Box material 17_8896bdce-fb4b-4abb-b45f-e12c50dae746']}
            geometry={nodes['Box_2_-_baked_19'].geometry}
            name="Box_2_-_baked_19"
          />
          <mesh
            material={materials['Box material 15_7b80fda7-72c4-4bc2-acf7-8ae551b6ff54']}
            geometry={nodes['Box_2_-_baked_20'].geometry}
            name="Box_2_-_baked_20"
          />
          <mesh
            material={materials['Box material 16_5d2bfad7-b7b6-48bf-93db-f086074c8683']}
            geometry={nodes['Box_2_-_baked_21'].geometry}
            name="Box_2_-_baked_21"
          />
          <mesh
            material={materials['Box material 20_1f9c86db-ca61-4474-b456-57030cf33398']}
            geometry={nodes['Box_2_-_baked_22'].geometry}
            name="Box_2_-_baked_22"
          />
          <mesh
            material={materials['Box material 21_cabbe588-04b3-4cfc-a96a-3bd60c497cc7']}
            geometry={nodes['Box_2_-_baked_23'].geometry}
            name="Box_2_-_baked_23"
          />
          <mesh
            material={materials['Box material 18_c7f2d7c1-2da1-4be4-861e-8d6d0a3b68bb']}
            geometry={nodes['Box_2_-_baked_24'].geometry}
            name="Box_2_-_baked_24"
          />
          <mesh
            material={materials['Box material 14_0428f76b-f0b9-4ba9-8e75-1ec1a782958d']}
            geometry={nodes['Box_2_-_baked_25'].geometry}
            name="Box_2_-_baked_25"
          />
          <mesh
            material={materials['Box material 10_c3bf638a-43d8-4ad7-a837-90fc8fb7f1aa']}
            geometry={nodes['Box_2_-_baked_26'].geometry}
            name="Box_2_-_baked_26"
          />
          <mesh
            material={materials['Box material 11_582dfc6e-34ee-4e14-8631-fd719c6b69b1']}
            geometry={nodes['Box_2_-_baked_27'].geometry}
            name="Box_2_-_baked_27"
          />
          <mesh
            material={materials['Box material 12_ca9b5467-517a-4ca2-9890-93459c19eb5a']}
            geometry={nodes['Box_2_-_baked_28'].geometry}
            name="Box_2_-_baked_28"
          />
          <mesh
            material={materials['Box material 2_51241688-a2dd-450b-9c97-c3d81b8471b3']}
            geometry={nodes['Box_2_-_baked_29'].geometry}
            name="Box_2_-_baked_29"
          />
          <mesh
            material={materials['Box material 5_041c3546-4f60-4ba5-9618-8a297d9571dc']}
            geometry={nodes['Box_2_-_baked_30'].geometry}
            name="Box_2_-_baked_30"
          />
          <mesh
            material={materials['Box material 19_2fc334a8-6a2e-4719-811b-afc37da2be69']}
            geometry={nodes['Box_2_-_baked_31'].geometry}
            name="Box_2_-_baked_31"
          />
          <mesh
            material={materials['Box material 22_f6d8054a-bb27-4f57-a0a1-e48b09202fda']}
            geometry={nodes['Box_2_-_baked_32'].geometry}
            name="Box_2_-_baked_32"
          />
          <mesh
            material={materials['Box material 23_e93aec7e-4eff-4cb5-a07d-1d6e881252ed']}
            geometry={nodes['Box_2_-_baked_33'].geometry}
            name="Box_2_-_baked_33"
          />
          <mesh
            material={materials['Box material 24_46bea7f0-bd41-41a0-9633-d5ecfd67be4d']}
            geometry={nodes['Box_2_-_baked_34'].geometry}
            name="Box_2_-_baked_34"
          />
          <mesh
            material={materials['Box material 25_dc064a19-1e71-4ab7-b80d-b673c4a560b1']}
            geometry={nodes['Box_2_-_baked_35'].geometry}
            name="Box_2_-_baked_35"
          />
          <mesh
            material={materials['Box material 26_c567e238-df5e-40d6-b695-a287dcdd2f38']}
            geometry={nodes['Box_2_-_baked_36'].geometry}
            name="Box_2_-_baked_36"
          />
          <mesh
            material={materials['Box material 27_a0c8ea2b-484d-42bb-96b4-999a6c850a57']}
            geometry={nodes['Box_2_-_baked_37'].geometry}
            name="Box_2_-_baked_37"
          />
          <mesh
            material={materials['Box material 28_a8f70e1f-5550-4554-b318-b764057f041b']}
            geometry={nodes['Box_2_-_baked_38'].geometry}
            name="Box_2_-_baked_38"
          />
          <mesh
            material={materials['Box material 29_aeaf9a4f-62e0-4151-9809-1478294f2320']}
            geometry={nodes['Box_2_-_baked_39'].geometry}
            name="Box_2_-_baked_39"
          />
          <mesh
            material={materials['Box material 30_389470fb-ce9c-4df4-9401-44bd6e3e5221']}
            geometry={nodes['Box_2_-_baked_40'].geometry}
            name="Box_2_-_baked_40"
          />
          <mesh
            material={materials['Box material 31_272df3c6-8487-4f05-87c5-c1662d8fcf92']}
            geometry={nodes['Box_2_-_baked_41'].geometry}
            name="Box_2_-_baked_41"
          />
          <mesh
            material={materials['Box material 32_40d95f9d-c20e-49da-9d8f-2eb37cf8d5c7']}
            geometry={nodes['Box_2_-_baked_42'].geometry}
            name="Box_2_-_baked_42"
          />
          <mesh
            material={materials['Box material 3_383691b1-0259-4da9-8089-8adbf2c01a92']}
            geometry={nodes['Box_2_-_baked_43'].geometry}
            name="Box_2_-_baked_43"
          />
          <mesh
            material={materials['Box material 6_10ca403a-5833-42ea-ba2a-51920c126807']}
            geometry={nodes['Box_2_-_baked_44'].geometry}
            name="Box_2_-_baked_44"
          />
          <mesh
            material={materials['Box material 33_99c3fce0-5415-44da-bbac-d63ff12a8ad9']}
            geometry={nodes['Box_2_-_baked_45'].geometry}
            name="Box_2_-_baked_45"
          />
          <mesh
            material={materials['Box material 34_cfba9dc1-d611-4f12-8848-596ada657350']}
            geometry={nodes['Box_2_-_baked_46'].geometry}
            name="Box_2_-_baked_46"
          />
          <mesh
            material={materials['Box material 35_7e0dd382-2b37-47a8-9555-9497424b8f92']}
            geometry={nodes['Box_2_-_baked_47'].geometry}
            name="Box_2_-_baked_47"
          />
          <mesh
            material={materials['Box material 36_dd16d21b-bbd6-4122-a49d-dbb58ee7c3cb']}
            geometry={nodes['Box_2_-_baked_48'].geometry}
            name="Box_2_-_baked_48"
          />
          <mesh
            material={materials['Box material 37_a34dd716-b5b3-4380-ae9f-0c3113d07400']}
            geometry={nodes['Box_2_-_baked_49'].geometry}
            name="Box_2_-_baked_49"
          />
          <mesh
            material={materials['Box material 38_845b7dfc-751a-4763-b975-ab6df020e521']}
            geometry={nodes['Box_2_-_baked_13'].geometry}
            name="Box_2_-_baked_13"
          />
          <mesh
            material={materials['Box material 39_b7663b34-7616-4ad5-a2bb-49302a03a54c']}
            geometry={nodes['Box_2_-_baked_50'].geometry}
            name="Box_2_-_baked_50"
          />
          <mesh
            material={materials['Box material 40_31934a98-e2fe-4022-b836-1fa122130ebf']}
            geometry={nodes['Box_2_-_baked_51'].geometry}
            name="Box_2_-_baked_51"
          />
          <mesh
            material={materials['Box material 41_46563bc1-4d54-462f-8ca4-9e5869382e2b']}
            geometry={nodes['Box_2_-_baked_52'].geometry}
            name="Box_2_-_baked_52"
          />
          <mesh
            material={materials['Box material 42_f67fbdd8-f9ec-4b19-b9a9-687a1335b950']}
            geometry={nodes['Box_2_-_baked_53'].geometry}
            name="Box_2_-_baked_53"
          />
          <mesh
            material={materials['Box material 43_f28901bf-ecfd-4492-b662-16886b568fad']}
            geometry={nodes['Box_2_-_baked_54'].geometry}
            name="Box_2_-_baked_54"
          />
          <mesh
            material={materials['Box material 44_540a968f-6daf-43ff-a4c9-8d52c3d9eb29']}
            geometry={nodes['Box_2_-_baked_55'].geometry}
            name="Box_2_-_baked_55"
          />
          <mesh
            material={materials['Box material 7_8f986c79-23f3-4d0c-81b6-f684a0fda857']}
            geometry={nodes['Box_2_-_baked_56'].geometry}
            name="Box_2_-_baked_56"
          />
          <mesh
            material={materials['Box material 8_a62fc7ea-29e3-4a49-bfa7-2b59334b2ea8']}
            geometry={nodes['Box_2_-_baked_57'].geometry}
            name="Box_2_-_baked_57"
          />
          <mesh
            material={materials['Box material 45_79e0d38a-c969-41f6-abb8-03b58d99ad37']}
            geometry={nodes['Box_2_-_baked_58'].geometry}
            name="Box_2_-_baked_58"
          />
          <mesh
            material={materials['Box material 46_7e5e537c-76b2-4fb0-b4cf-eff6e7bab1b3']}
            geometry={nodes['Box_2_-_baked_59'].geometry}
            name="Box_2_-_baked_59"
          />
          <mesh
            material={materials['Box material 47_5d65435f-1857-40d8-a480-dc83646c4681']}
            geometry={nodes['Box_2_-_baked_60'].geometry}
            name="Box_2_-_baked_60"
          />
          <mesh
            material={materials['Box material 48_b215c485-f2a9-4811-85ed-359c9c8f3e84']}
            geometry={nodes['Box_2_-_baked_61'].geometry}
            name="Box_2_-_baked_61"
          />
          <mesh
            material={materials['Box material 49_1ccb3bf0-3f73-4cda-a86a-8c13b43dc5c0']}
            geometry={nodes['Box_2_-_baked_62'].geometry}
            name="Box_2_-_baked_62"
          />
          <mesh
            material={materials['Box material 50_93fab30e-5b8f-40d1-ba67-176c39a4f94f']}
            geometry={nodes['Box_2_-_baked_63'].geometry}
            name="Box_2_-_baked_63"
          />
          <mesh
            material={materials['Box material 51_0a735a47-68ac-4ef6-847b-63040f9e691c']}
            geometry={nodes['Box_2_-_baked_64'].geometry}
            name="Box_2_-_baked_64"
          />
          <mesh
            material={materials['Box material 52_ba903f33-7d3b-4c0b-8a74-8b59afecb4a9']}
            geometry={nodes['Box_2_-_baked_65'].geometry}
            name="Box_2_-_baked_65"
          />
          <mesh
            material={materials['Box material 53_0eed29b2-0e70-4b97-99c4-3c6a0f251480']}
            geometry={nodes['Box_2_-_baked_66'].geometry}
            name="Box_2_-_baked_66"
          />
          <mesh
            material={materials['Box material 54_ca237ef1-8c55-4313-bf18-86f57a0423e6']}
            geometry={nodes['Box_2_-_baked_67'].geometry}
            name="Box_2_-_baked_67"
          />
          <mesh
            material={materials['Box material 55_bbcd3a7c-b18b-4140-9f59-0a5d82703f44']}
            geometry={nodes['Box_2_-_baked_68'].geometry}
            name="Box_2_-_baked_68"
          />
          <mesh
            material={materials['Box material 56_2ff7f0c3-3004-4322-98c0-e2e84daccc55']}
            geometry={nodes['Box_2_-_baked_69'].geometry}
            name="Box_2_-_baked_69"
          />
          <mesh
            material={materials['Box material 57_a15fb0cc-b82c-479b-b258-fe78971dfb2b']}
            geometry={nodes['Box_2_-_baked_70'].geometry}
            name="Box_2_-_baked_70"
          />
          <mesh
            material={materials['Box material 58_fb7308a3-f1c8-4d0f-a95b-e364a094df0e']}
            geometry={nodes['Box_2_-_baked_71'].geometry}
            name="Box_2_-_baked_71"
          />
          <mesh
            material={materials['Box material 59_29a20f96-df75-4a10-b691-bbff3e7dc62f']}
            geometry={nodes['Box_2_-_baked_72'].geometry}
            name="Box_2_-_baked_72"
          />
          <mesh
            material={materials['Box material 60_99c73be7-eecf-4bee-a7b2-72160ddc17b1']}
            geometry={nodes['Box_2_-_baked_73'].geometry}
            name="Box_2_-_baked_73"
          />
          <mesh
            material={materials['Box material 61_7e96ab0a-737e-4301-aa32-2f27ca5f6e0e']}
            geometry={nodes['Box_2_-_baked_74'].geometry}
            name="Box_2_-_baked_74"
          />
          <mesh
            material={materials['Box material 62_26038a02-fb1e-4ed7-b115-4db58efa5002']}
            geometry={nodes['Box_2_-_baked_75'].geometry}
            name="Box_2_-_baked_75"
          />
          <mesh
            material={materials['Box material 63_7c00eab9-9e13-4f32-976a-a61c9e47f971']}
            geometry={nodes['Box_2_-_baked_76'].geometry}
            name="Box_2_-_baked_76"
          />
          <mesh
            material={materials['Box material 64_f1f96336-da65-4e33-9e16-712b62cc1b5c']}
            geometry={nodes['Box_2_-_baked_77'].geometry}
            name="Box_2_-_baked_77"
          />
          <mesh
            material={materials['Box material 65_262707b8-c874-4743-80c3-3d4a401cdaae']}
            geometry={nodes['Box_2_-_baked_78'].geometry}
            name="Box_2_-_baked_78"
          />
          <mesh
            material={materials['Box material 66_5717b6de-e4c2-4a6d-b6b0-4751d0932848']}
            geometry={nodes['Box_2_-_baked_79'].geometry}
            name="Box_2_-_baked_79"
          />
          <mesh
            material={materials['Box material 67_f5e8c085-73b4-4ec2-86be-e689ebff9a3a']}
            geometry={nodes['Box_2_-_baked_80'].geometry}
            name="Box_2_-_baked_80"
          />
          <mesh
            material={materials['Box material 68_7cb570dc-dc46-4015-bf04-24ca4051567a']}
            geometry={nodes['Box_2_-_baked_81'].geometry}
            name="Box_2_-_baked_81"
          />
          <mesh
            material={materials['Box material 69_cdb89c80-8349-405d-b7e9-2165822b5847']}
            geometry={nodes['Box_2_-_baked_82'].geometry}
            name="Box_2_-_baked_82"
          />
          <mesh
            material={materials['Box material 70_cff8cecf-77d1-4ed4-a4aa-dab4f2a3a378']}
            geometry={nodes['Box_2_-_baked_83'].geometry}
            name="Box_2_-_baked_83"
          />
          <mesh
            material={materials['Box material 71_1284f281-a8a3-4588-9078-ffc76e1d09ba']}
            geometry={nodes['Box_2_-_baked_84'].geometry}
            name="Box_2_-_baked_84"
          />
        </group>
      </scene>
    </group>
  )
}

function Potato(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/potatoes.gltf')

  return (
    <group ref={group} {...props} dispose={null} position={props.position} scale={[.5, .5, .5]}>
      <scene name="AuxScene">
        <group>
          <mesh
            material={materials['Box material 1_93920da3-46b4-4b1e-9a0b-4cdf9aa026fa']}
            geometry={nodes.main.geometry}
            name="main"
          />
          <mesh
            material={materials['Box material 6_8c085fc6-b1f9-4685-95bb-f89861314608']}
            geometry={nodes.das.geometry}
            name="das"
          />
          <mesh
            material={materials['Box material 11_21561d6f-b990-4e59-b836-76a0fb20fae2']}
            geometry={nodes.sdaasd.geometry}
            name="sdaasd"
          />
          <mesh
            material={materials['Box material 7_bdf8c63d-5674-46f8-b473-c59552ad0e51']}
            geometry={nodes.mid_4.geometry}
            name="mid_4"
          />
          <mesh
            material={materials['Box material 13_bba6e437-b257-46a1-8c39-76b0cde1f910']}
            geometry={nodes.mid_5.geometry}
            name="mid_5"
          />
          <mesh
            material={materials['Box material 4_2c64d34e-b375-449a-91ff-dc13003df6b7']}
            geometry={nodes.mid_1.geometry}
            name="mid_1"
          />
          <mesh
            material={materials['Box material 12_c293bd87-efcc-477e-8c1a-2eb14b372875']}
            geometry={nodes.mid_2.geometry}
            name="mid_2"
          />
          <mesh
            material={materials['Box material 5_bd4901aa-6e24-4d1d-8237-a8ec78e41f75']}
            geometry={nodes.side.geometry}
            name="side"
          />
          <mesh
            material={materials['Box material 2_753e2819-fc5e-49c0-b0d7-32581861b1a0']}
            geometry={nodes.bot.geometry}
            name="bot"
          />
          <mesh
            material={materials['Box material 3_05386261-4c16-40e7-8f53-a63a1c9db07b']}
            geometry={nodes.TOP.geometry}
            name="TOP"
          />
          <mesh
            material={materials['Box material 9_514dea90-c1bf-45f4-a437-dc19a23dc900']}
            geometry={nodes.bot_1.geometry}
            name="bot_1"
          />
          <mesh
            material={materials['Box material 8_05f1fabc-5dbf-42d7-84f6-087a72559541']}
            geometry={nodes.TOP1.geometry}
            name="TOP1"
          />
          <mesh
            material={materials['Box material 10_bf77a0ce-cefd-4c4c-8863-f7b947e09d09']}
            geometry={nodes.side_1.geometry}
            name="side_1"
          />
          <mesh
            material={materials['Box material 14_12bdbddc-bec5-4e6e-9ba2-e213000db4b1']}
            geometry={nodes.main_1.geometry}
            name="main_1"
          />
          <mesh
            material={materials['Box material 15_2c20d402-fe5d-49d3-8a66-47241f375de3']}
            geometry={nodes.das_1.geometry}
            name="das_1"
          />
          <mesh
            material={materials['Box material 16_34818e31-780a-4fc5-80bd-7cb173d0c4b3']}
            geometry={nodes.sdaasd_1.geometry}
            name="sdaasd_1"
          />
          <mesh
            material={materials['Box material 17_126920f0-1499-4290-9e90-68baf0c4ce27']}
            geometry={nodes.mid_6.geometry}
            name="mid_6"
          />
          <mesh
            material={materials['Box material 19_e100380d-0ba9-465a-8608-73b03a1d5c5e']}
            geometry={nodes.mid_3.geometry}
            name="mid_3"
          />
          <mesh
            material={materials['Box material 20_1ac0c2a5-f462-4ade-9505-c83fbcac8b6f']}
            geometry={nodes.mid_8.geometry}
            name="mid_8"
          />
          <mesh
            material={materials['Box material 21_fa0b273f-3902-4454-ba9a-33e55c0141fc']}
            geometry={nodes.side_2.geometry}
            name="side_2"
          />
          <mesh
            material={materials['Box material 22_29e9d4a8-5aa6-4ffc-ada6-53654565cbde']}
            geometry={nodes.bot_2.geometry}
            name="bot_2"
          />
          <mesh
            material={materials['Box material 23_aedf8c05-8a64-496a-9275-0db132a3e819']}
            geometry={nodes.TOP_1.geometry}
            name="TOP_1"
          />
          <mesh
            material={materials['Box material 24_2ab6cb19-72bb-4b7e-b15e-c417f7ec6315']}
            geometry={nodes.bot_3.geometry}
            name="bot_3"
          />
          <mesh
            material={materials['Box material 25_84ade99d-a223-4ba5-b70e-bd7d83e009e8']}
            geometry={nodes.TOP1_1.geometry}
            name="TOP1_1"
          />
          <mesh
            material={materials['Box material 26_cfe603a8-a855-4ce3-b2a9-a27d87bc7f55']}
            geometry={nodes.side_3.geometry}
            name="side_3"
          />
          <mesh
            material={materials['Box material 18_073f73e6-a8c2-46b9-a5f3-458062f8d385']}
            geometry={nodes.mid_7.geometry}
            name="mid_7"
          />
        </group>
      </scene>
    </group>
  )
}

function Carrot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/carrots.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="AuxScene">
        <group>
          <mesh
            material={materials['Box material 12_d5faf52c-9d1d-410b-822f-9cf887ba0901']}
            geometry={nodes.Box_10.geometry}
            name="Box_10"
          />
          <mesh
            material={materials['Box material 13_da0ca515-c645-42c0-ab20-7525d1a06a39']}
            geometry={nodes.Box_11.geometry}
            name="Box_11"
          />
          <mesh
            material={materials['Box material 14_06824ccd-5bf8-4516-b7ba-6a5758ba3926']}
            geometry={nodes.Box_12.geometry}
            name="Box_12"
          />
          <mesh
            material={materials['Box material 15_0a07aa31-1197-4686-8a52-74925c5deac8']}
            geometry={nodes.Box_13.geometry}
            name="Box_13"
          />
          <mesh
            material={materials['Box material 16_6d4dd9af-56ef-4bf0-b308-aed46d1418a0']}
            geometry={nodes.tip_2.geometry}
            name="tip_2"
          />
          <mesh
            material={materials['Box material 17_6686a88e-bc8a-4f94-9abe-8454ea8bb3da']}
            geometry={nodes.tip_3.geometry}
            name="tip_3"
          />
          <mesh
            material={materials['Box material 18_8c903249-004a-431e-8420-4ca811d169c4']}
            geometry={nodes.Box_14.geometry}
            name="Box_14"
          />
          <mesh
            material={materials['Box material 19_4f472fdd-3191-49fd-8afd-fdcbc4f74858']}
            geometry={nodes.Box_15.geometry}
            name="Box_15"
          />
          <mesh
            material={materials['Box material 20_208a9740-3b00-4a5b-a7fd-1ba7e91a2f51']}
            geometry={nodes.Box_16.geometry}
            name="Box_16"
          />
          <mesh
            material={materials['Box material 21_c9314d76-a910-41fa-a535-1830004045c7']}
            geometry={nodes.Box_17.geometry}
            name="Box_17"
          />
          <mesh
            material={materials['Box material 22_0f9ea5c4-a325-4d06-955c-83befd5e92cb']}
            geometry={nodes.Box_18.geometry}
            name="Box_18"
          />
          <mesh
            material={materials['Box material 23_1ec08aff-661c-41ca-a266-a804ffdab217']}
            geometry={nodes.Box_19.geometry}
            name="Box_19"
          />
          <mesh
            material={materials['Box material 24_3cf837e8-fc3b-46a9-8c48-da46fa62519e']}
            geometry={nodes.Box_20.geometry}
            name="Box_20"
          />
          <mesh
            material={materials['Box material 25_bc03eb8e-a05f-443a-9f47-ebc283c0d87e']}
            geometry={nodes.Box_21.geometry}
            name="Box_21"
          />
          <mesh
            material={materials['Box material 26_6a4ac4ad-a35b-4c3f-978c-2981046ce228']}
            geometry={nodes.Box_22.geometry}
            name="Box_22"
          />
          <mesh
            material={materials['Box material 27_0e0c542a-c12a-4789-bba3-29ca36abf947']}
            geometry={nodes.tip_4.geometry}
            name="tip_4"
          />
          <mesh
            material={materials['Box material 28_5262877c-54ee-4447-8352-d7c13c7a8d42']}
            geometry={nodes.tip_5.geometry}
            name="tip_5"
          />
          <mesh
            material={materials['Box material 29_edd2b189-b07c-4cb3-8dc2-bc1e84179fa4']}
            geometry={nodes.Box_23.geometry}
            name="Box_23"
          />
          <mesh
            material={materials['Box material 30_b1919447-92ca-486e-ae68-d63485f2465d']}
            geometry={nodes.Box_24.geometry}
            name="Box_24"
          />
          <mesh
            material={materials['Box material 31_0cfa6469-09b1-4036-9327-673fbf737543']}
            geometry={nodes.Box_25.geometry}
            name="Box_25"
          />
          <mesh
            material={materials['Box material 32_f86ed12e-2112-48bb-94b6-6354a41c2c1a']}
            geometry={nodes.Box_26.geometry}
            name="Box_26"
          />
          <mesh
            material={materials['Box material 33_3bcf355f-6ebb-4fcf-99f4-3b7de554cc56']}
            geometry={nodes.Box_27.geometry}
            name="Box_27"
          />
          <mesh
            material={materials['Box material 45_69a1b644-e88a-4426-a738-6773ed9ca237']}
            geometry={nodes.Box_28.geometry}
            name="Box_28"
          />
          <mesh
            material={materials['Box material 46_083ac3f0-1b20-4d0e-8f57-1027231a9f11']}
            geometry={nodes.Box_29.geometry}
            name="Box_29"
          />
          <mesh
            material={materials['Box material 47_61692438-e4bd-40dc-ad47-34cf88abb4b6']}
            geometry={nodes.Box_30.geometry}
            name="Box_30"
          />
          <mesh
            material={materials['Box material 48_a98730ab-9136-4207-a50f-4e79e778554e']}
            geometry={nodes.Box_31.geometry}
            name="Box_31"
          />
          <mesh
            material={materials['Box material 49_13acdafa-6eb9-43be-9c89-e070bd21c8e4']}
            geometry={nodes.tip_6.geometry}
            name="tip_6"
          />
          <mesh
            material={materials['Box material 50_5fd885ef-d26a-47f5-9be6-807731114683']}
            geometry={nodes.tip_7.geometry}
            name="tip_7"
          />
          <mesh
            material={materials['Box material 51_630407d3-f265-4f25-bf95-fff6aa8184e1']}
            geometry={nodes.Box_32.geometry}
            name="Box_32"
          />
          <mesh
            material={materials['Box material 52_5f3371a1-8d67-4ad7-97ae-c0b9d2bb6e57']}
            geometry={nodes.Box_33.geometry}
            name="Box_33"
          />
          <mesh
            material={materials['Box material 53_6ff92edb-9fcf-4d6f-9ca1-decfabda9936']}
            geometry={nodes.Box_34.geometry}
            name="Box_34"
          />
          <mesh
            material={materials['Box material 54_1f30c29a-1951-4d92-8613-b30604c4425d']}
            geometry={nodes.Box_35.geometry}
            name="Box_35"
          />
          <mesh
            material={materials['Box material 55_7297d3a0-a6a6-457e-b467-1f76caa360ad']}
            geometry={nodes.Box_36.geometry}
            name="Box_36"
          />
          <mesh
            material={materials['Box material 56_15f7c78c-9a0d-423c-b62a-7dc7861d047d']}
            geometry={nodes.Box_6.geometry}
            name="Box_6"
          />
          <mesh
            material={materials['Box material 57_0ab0d7e1-6800-4e66-8e89-4a1d3bcd46e3']}
            geometry={nodes.Box_9.geometry}
            name="Box_9"
          />
          <mesh
            material={materials['Box material 58_1e4e9702-f8d2-4530-aae4-05892596ae6d']}
            geometry={nodes.Box_8.geometry}
            name="Box_8"
          />
          <mesh
            material={materials['Box material 59_500405d9-6e53-495c-bdd7-6c6d4a41a37b']}
            geometry={nodes.Box_7.geometry}
            name="Box_7"
          />
          <mesh
            material={materials['Box material 60_22b1e013-2a10-4a78-8928-189948cfde53']}
            geometry={nodes.tip.geometry}
            name="tip"
          />
          <mesh
            material={materials['Box material 61_7fc14b81-b08d-493a-831c-8d876ccbe192']}
            geometry={nodes.tip_1.geometry}
            name="tip_1"
          />
          <mesh
            material={materials['Box material 62_de9b1e9e-c2c5-4be1-b2f7-90b158a265b8']}
            geometry={nodes.Box_5.geometry}
            name="Box_5"
          />
          <mesh
            material={materials['Box material 63_323c5714-2212-4cbb-9323-5d035c4ab2e5']}
            geometry={nodes.Box_4.geometry}
            name="Box_4"
          />
          <mesh
            material={materials['Box material 64_af511fdf-6c5b-4830-90d5-3ed9363ec74d']}
            geometry={nodes.Box_2.geometry}
            name="Box_2"
          />
          <mesh
            material={materials['Box material 65_0a5fc0d0-5adb-4eae-b99e-a09c2ba0de09']}
            geometry={nodes.Box_1.geometry}
            name="Box_1"
          />
          <mesh
            material={materials['Box material 66_60cc6dff-eec9-4051-9b3f-134e34e7d7b5']}
            geometry={nodes.Box_3.geometry}
            name="Box_3"
          />
          <mesh
            material={materials['Box material 67_00f51920-f803-4581-9e52-d70d75d4c81d']}
            geometry={nodes.Box_37.geometry}
            name="Box_37"
          />
          <mesh
            material={materials['Box material 68_05315859-3965-419f-8bc7-a7ce11299899']}
            geometry={nodes.Box_38.geometry}
            name="Box_38"
          />
          <mesh
            material={materials['Box material 69_e10d24e1-1930-447b-98c5-d32f5e9b053d']}
            geometry={nodes.Box_39.geometry}
            name="Box_39"
          />
          <mesh
            material={materials['Box material 70_b6c5c4fe-d589-4fb8-b871-abd8c685047f']}
            geometry={nodes.Box_40.geometry}
            name="Box_40"
          />
          <mesh
            material={materials['Box material 71_4b9fb426-d67d-4787-9ebb-f4d66ab02890']}
            geometry={nodes.tip_8.geometry}
            name="tip_8"
          />
          <mesh
            material={materials['Box material 72_d2f79879-5993-4ba1-a945-faa730ac7524']}
            geometry={nodes.tip_9.geometry}
            name="tip_9"
          />
          <mesh
            material={materials['Box material 73_50becf9d-ef15-4bd9-acbe-be3a0fc49792']}
            geometry={nodes.Box_41.geometry}
            name="Box_41"
          />
          <mesh
            material={materials['Box material 74_73935baf-8bc5-423e-a51d-0212b249b6b7']}
            geometry={nodes.Box_42.geometry}
            name="Box_42"
          />
          <mesh
            material={materials['Box material 75_12031537-2023-4c66-a5fb-770f9dfbcd42']}
            geometry={nodes.Box_43.geometry}
            name="Box_43"
          />
          <mesh
            material={materials['Box material 76_6ecef3cf-f25c-4783-9654-4fd23ed233cd']}
            geometry={nodes.Box_44.geometry}
            name="Box_44"
          />
          <mesh
            material={materials['Box material 77_90fcba47-da89-4c07-ac99-0bced382b245']}
            geometry={nodes.Box_45.geometry}
            name="Box_45"
          />
        </group>
      </scene>
    </group>
  )
}


const Plant = props => {
  if(props.name === 'potatoes') {
    return (
      <Potato
        position={props.position}
        name={props.name}
      />
    );
  }
  if(props.name === 'tomatoes') {
    return (
      <Tomato
        position={props.position}
        name={props.name}
      />
    );
  }
  if(props.name === 'cabbages') {
    return (
      <Cabbage
        position={props.position}
        name={props.name}
      />
    );
  }
  if(props.name === 'bellPeppers') {
    return (
      <BellPepper
        position={props.position}
        name={props.name}
      />
    );
  }
  if(props.name === 'carrots') {
    return (
      <Carrot
        position={props.position}
        name={props.name}
      />
    );
  }
  return (
    <Onion
      position={props.position}
      name={props.name}
    />
  );
}

export default Plant;

//map={texture} />
