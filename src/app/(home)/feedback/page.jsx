import React from 'react'
import FeedbackRating from '@/components/FeedbackRating';
import CustomerSaying from '@/components/home-page/CustomerSaying';
import FeedbackCard from '@/components/home-page/FeedbackCard';
import CustomerReviewCard from '@/components/ProductDetailsCard/CustomerReviewCard';

const Feedback = () => {
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <FeedbackRating/>
      <CustomerReviewCard/>
      <CustomerSaying/>
      <FeedbackCard/>
      </section>
  )
}

export default Feedback