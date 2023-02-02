<template>
  <div class="flex px-10 py-5 bg-slate-800 min-h-[100vh]">
    <Form class="flex justify-around w-full" @submit="checkForm" :validation-schema="schema" v-slot="{ values, errors }">
      <div class="flex flex-col">
        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">Credit card</label>
          <Field
              name="card"
              type="text"
              :class="fieldClasses"
              v-maska
              data-maska="#### #### #### ####"
          />
          <span class="text-red-600 text-sm m-1">{{errors.card}}</span>
        </div>

        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">Number</label>
          <Field
              name="fiveDigitNum"
              type="number"
              :class="fieldClasses"
              v-maska
              data-maska="#####"
          />
          <span class="text-red-600 text-sm m-1">{{ errors.fiveDigitNum}}</span>
        </div>

        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">String</label>
          <Field
              name="onlyString"
              type="text"
              :class="fieldClasses"
          />
          <span class="text-red-600 text-sm m-1">{{ errors.onlyString}}</span>
        </div>

        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">Sum</label>
          <Field
              name="sum"
              type="text"
              :class="fieldClasses"
              v-maska:[options]
              data-maska="0.99"
              data-maska-tokens="0:\d:multiple|9:\d:optional"
          />
          <span class="text-red-600 text-sm m-1">{{ errors.sum}}</span>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">Password</label>
          <Field
              name="password"
              type="password"
              :class="fieldClasses"
          />
          <span class="text-red-600 text-sm m-1">{{ errors.password }}</span>
        </div>

        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">Select</label>
          <Field
              name="selectField"
              as="select"
              :class="fieldClasses"
          >
            <option value="" disabled>Select</option>
            <option value="web">Web</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
          </Field>
          <span class="text-red-600 text-sm m-1">{{ errors.selectField }}</span>
        </div>

        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">Cities</label>
          <Field
              name="cities"
              as="select"
              :class="fieldClasses"
          >
            <option value="" disabled>Select a city</option>
            <option
                v-for="city in cities"
                :value="city.city"
                class="capitalize"
                :key="city.city"
            >{{ city.city }}
            </option>
          </Field>
          <span class="text-red-600 text-sm m-1">{{ errors.cities }}</span>
        </div>

        <div class="flex flex-col">
          <label class="text-base text-amber-50 mb-2">Towns</label>
          <Field
              name="towns"
              as="select"
              :disabled="!values.cities"
              :class="fieldClasses"
          >
            <option value="" disabled>Select a city</option>
            <option
                v-for="city in cities.find(c => c.city === values.cities)?.towns"
                :value="city"
                class="capitalize"
                :key="city"
            >{{ city }}
            </option>
          </Field>
          <span class="text-red-600 text-sm m-1">{{ errors.towns }}</span>
        </div>
      </div>

      <button type="submit" class="absolute bottom-10 right-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </Form>
  </div>
</template>

<script setup>
import {Field, Form} from 'vee-validate';
import {cities} from '@/mocks/cities';
import {schema} from '@/utils/yupSchema';
import {options} from '@/utils/maskOptions';

const fieldClasses = "bg-gray-50 w-80 h-10 focus:border-blue-600 outline-0 px-2 border-2 border-gray-300 text-gray-900 text-base rounded-lg"

const checkForm = (values) => {
  console.log(values)
}
</script>
